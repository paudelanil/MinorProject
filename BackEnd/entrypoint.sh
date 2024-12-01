#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e


# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations
python manage.py migrate

# Collect static files (optional, for production)
if [ "$DJANGO_ENV" = "production" ]; then
  echo "Collecting static files..."
  python manage.py collectstatic --noinput
fi

python manage.py runserver 0.0.0.0:8000

# Execute the container's main process (e.g., runserver)
exec "$@"

