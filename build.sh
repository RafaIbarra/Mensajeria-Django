#!/usr/bin/env bash
# exit on error
set -o errexit

poetry install
poetry add gunicorn
pip install -r requirements.txt

python manage.py collectstatic --no-input
python manage.py migrate

