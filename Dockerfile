# Build stage
FROM php:8.4-fpm-alpine AS builder

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    build-base \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libzip-dev \
    zlib-dev \
    postgresql-dev \
    nodejs \
    npm \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) \
    gd \
    zip \
    pdo \
    pdo_pgsql \
    pdo_mysql \
    bcmath \
    ctype \
    fileinfo

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy composer files
COPY composer.json composer.lock* ./

# Install PHP dependencies
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# Copy Node package files and install dependencies for frontend build
COPY package.json package-lock.json* ./
RUN npm ci

# Copy application code
COPY . .

# Generate optimized autoloader
RUN composer dump-autoload --optimize

# Build assets
RUN npm run build

# Runtime stage
FROM php:8.4-fpm-alpine

# Set working directory
WORKDIR /app

# Install runtime dependencies only
RUN apk add --no-cache \
    nginx \
    supervisor \
    wget \
    netcat-openbsd \
    libpng \
    libjpeg-turbo \
    freetype \
    libzip \
    postgresql-client

# Reuse PHP extensions compiled in the builder stage
COPY --from=builder /usr/local/lib/php/extensions/ /usr/local/lib/php/extensions/
COPY --from=builder /usr/local/etc/php/conf.d/ /usr/local/etc/php/conf.d/

# Copy PHP configuration
COPY docker/php.ini /usr/local/etc/php/conf.d/laravel.ini
COPY docker/www.conf /usr/local/etc/php-fpm.d/www.conf

# Copy Nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/http.d/default.conf

# Copy Supervisor configuration
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy built application from builder
COPY --from=builder --chown=nobody:nobody /app /app

# Create necessary directories and set permissions
RUN mkdir -p /app/storage/logs && \
    chown -R nobody:nobody /app && \
    chmod -R 755 /app/storage && \
    chmod -R 755 /app/bootstrap/cache

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8000 || exit 1

# Run startup script
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
