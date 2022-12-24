
#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install
pip install -r requirements.txt

python mensajeria/mensajeriaapp/mensajeriaapp/manage.py collectstatic --no-input

python mensajeria/mensajeriaapp/mensajeriaapp/manage.py migrate

python mensajeria/mensajeriaapp/mensajeriaapp/manage.py tailwind build