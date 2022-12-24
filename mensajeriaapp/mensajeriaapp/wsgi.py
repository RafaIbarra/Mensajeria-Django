"""
WSGI config for mensajeriaapp project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import importlib
module_name = 'package'
special_module = importlib.import_module(module_name, package=None)


import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mensajeriaapp.settings')

application = get_wsgi_application()
