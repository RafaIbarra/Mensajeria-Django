
#!/usr/bin/env bash
# exit on error
set -o errexit

# poetry install
pip install -r requirements.txt

python ./mensajeriaapp/manage.py collectstatic --no-input

python ./mensajeriaapp/manage.py migrate

