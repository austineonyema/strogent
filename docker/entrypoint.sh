#!/bin/sh
set -e

# Replace PORT placeholder in nginx config
sed -i "s/\${PORT}/$PORT/g" /etc/nginx/http.d/default.conf

# Wait for database to be ready (if needed)
if [ -n "$DB_HOST" ]; then
    echo "Waiting for database connection..."
    while ! nc -z "$DB_HOST" "${DB_PORT:-5432}"; do
        sleep 1
    done
    echo "Database is ready!"
fi

# Run migrations if enabled
if [ "${RUN_MIGRATIONS:-true}" = "true" ]; then
    echo "Running database migrations..."
    php artisan migrate --force
else
    echo "Skipping database migrations (RUN_MIGRATIONS=${RUN_MIGRATIONS})"
fi

# Cache framework artifacts if enabled
if [ "${CACHE_ARTISAN:-false}" = "true" ]; then
    echo "Caching Laravel artifacts..."
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
else
    echo "Skipping Laravel cache warmup (CACHE_ARTISAN=${CACHE_ARTISAN})"
fi

# Set proper permissions
chown -R nobody:nobody /app/storage /app/bootstrap/cache 2>/dev/null || true
chmod -R 755 /app/storage /app/bootstrap/cache 2>/dev/null || true

echo "Application ready!"

# Execute the main command
exec "$@"
