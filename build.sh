
#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install
pip install -r requirements.txt

python Mensajeria-Django/mensajeriaapp/mensajeriaapp/manage.py collectstatic --no-input

python Mensajeria-Django/mensajeriaapp/mensajeriaapp/manage.py migrate

python Mensajeria-Django/mensajeriaapp/mensajeriaapp/manage.py tailwind build