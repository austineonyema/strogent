# ----------------------------
# BUILD STAGE
# ----------------------------
FROM php:8.4-fpm-alpine AS builder

# Set working directory
WORKDIR /app

# ----------------------------
# Install system dependencies
# ----------------------------
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

# ----------------------------
# Install PHP extensions
# ----------------------------
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

# ----------------------------
# Install Composer
# ----------------------------
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# ----------------------------
# Copy composer files (for caching)
# ----------------------------
COPY composer.json composer.lock ./ 

# Copy artisan and essential folders for post-autoload-dump
COPY artisan ./ 
COPY bootstrap ./bootstrap
COPY config ./config

# Install PHP dependencies
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# ----------------------------
# Copy rest of application
# ----------------------------
COPY . .

# Generate optimized autoload
RUN composer dump-autoload --optimize

# ----------------------------
# Node / Frontend Build
# ----------------------------
COPY package.json package-lock.json* ./ 
RUN npm ci

# Copy assets and build
COPY . .
RUN npm run build

# ----------------------------
# RUNTIME STAGE
# ----------------------------
FROM php:8.4-fpm-alpine

WORKDIR /app

# ----------------------------
# Install runtime dependencies
# ----------------------------
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

# ----------------------------
# Copy PHP extensions & configs from builder
# ----------------------------
COPY --from=builder /usr/local/lib/php/extensions/ /usr/local/lib/php/extensions/
COPY --from=builder /usr/local/etc/php/conf.d/ /usr/local/etc/php/conf.d/

COPY docker/php.ini /usr/local/etc/php/conf.d/laravel.ini
COPY docker/www.conf /usr/local/etc/php-fpm.d/www.conf

# ----------------------------
# Nginx & Supervisor configs
# ----------------------------
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# ----------------------------
# Copy built application from builder
# ----------------------------
COPY --from=builder --chown=nobody:nobody /app /app

# ----------------------------
# Fix permissions
# ----------------------------
RUN mkdir -p /app/storage/logs /var/log/nginx /var/run && \
    chown -R nobody:nobody /app /var/log/nginx /var/run && \
    chmod -R 755 /app/storage /app/bootstrap/cache

# ----------------------------
# Health check
# ----------------------------
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8000 || exit 1

# ----------------------------
# Run Startup script
# ----------------------------
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
