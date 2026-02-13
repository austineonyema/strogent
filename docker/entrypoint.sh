#!/bin/sh
set -e

# Replace PORT placeholder in nginx config
sed -i "s/\${PORT}/$PORT/g" /etc/nginx/http.d/default.conf

# Wait for database to be ready (if needed)
if [ ! -z "$DB_HOST" ]; then
    echo "Waiting for database connection..."
    while ! nc -z "$DB_HOST" "${DB_PORT:-5432}"; do
        sleep 1
    done
    echo "Database is ready!"
fi

# Run migrations
echo "Running database migrations..."
php artisan migrate --force

# Clear and cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set proper permissions
chown -R nobody:nobody /app/storage /app/bootstrap/cache 2>/dev/null || true
chmod -R 755 /app/storage /app/bootstrap/cache 2>/dev/null || true

echo "Application ready!"

# Execute the main command
exec "$@"
