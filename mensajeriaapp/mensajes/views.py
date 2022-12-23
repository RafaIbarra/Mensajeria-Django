from django.db import IntegrityError
from django.shortcuts import render,get_object_or_404,HttpResponseRedirect
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import JsonResponse
import json

from . models import Usuarios
from . models import Conversaciones
from . models import Participantes
from . models import Chats

def home(request):
    return render(request, 'home.html')

@login_required
def usuario(request,id_usuario):
     try:
        usuarios=get_object_or_404(Usuarios,pk=id_usuario)
        return render(request, 'usuario.html',{
            "usuarios":usuarios
        })
     except IntegrityError:
        return render(request, 'home.html')


def signin(request):
    if request.method=='GET':
        return render(request, 'signin.html')
    else:
        user = authenticate(
            request, username=request.POST['user'], password=request.POST['password'])
        if user is None:
            return render(request, 'signin.html')

        login(request, user)
        usuario_reg=get_object_or_404(Usuarios,user_name=user)
        return HttpResponseRedirect(reverse("mensajes:usuario",args=(usuario_reg.id,)))
        

@login_required
def signout(request):
    logout(request)
    return render(request, 'home.html')
        



def registro_usuario(request):
    nombre=request.POST["nombre"]
    apellido=request.POST["apellido"]
    nacimiento=request.POST["nacimiento"]
    nombre_usuario=request.POST["user"]
    email=request.POST["correo"]
    contrasena1=request.POST["contrasena1"]
    contrasena2=request.POST["contrasena2"]
    if contrasena1==contrasena2:
        try:
            u=Usuarios(
                nombre_usuario=nombre,
                apellido_usuario=apellido,
                fecha_nacimiento=nacimiento,
                user_name=nombre_usuario,
                correo=email,
                activo=True,
                ultima_conexion=timezone.now(),
                fecha_registro=timezone.now()
            )
            u.save()
            user = User.objects.create_user(nombre_usuario, password=contrasena1)
            user.save()
            login(request, user)
            usuario_reg=get_object_or_404(Usuarios,user_name=user)

            return HttpResponseRedirect(reverse("mensajes:usuario",args=(usuario_reg.id,)))
        except IntegrityError:
            pass
            #return render(request, 'signup.html', {"form": UserCreationForm, "error": "Username already exists."})

    #return render(request, 'signup.html', {"form": UserCreationForm, "error": "Passwords did not match."})

@login_required
def registro_conversacion(request):
    if request.method=='GET':
        return render(request, 'nuevo_mensaje.html')
    else:
        id_activo=request.user.username
        user_activo=Usuarios.objects.get(user_name=id_activo)
        destino=request.POST['destinatario']

        id_destino=Usuarios.objects.get(user_name=destino)
        

        conver_reg=Conversaciones.obtenerconversacion(user_activo.user_name,id_destino.user_name)
        

        participante1=user_activo.user_name
        participante2=id_destino.user_name
        #if conv1 is None and conv2 is None:
        if conver_reg==0:
           
            m=Conversaciones(
                remitente=user_activo.user_name,
                destinatario=destino,
                fecha_registro=timezone.now()
            )
            m.save()
            part1=Participantes(
                                id_conversacion=Conversaciones.objects.get(remitente=participante1,destinatario=participante2),
                                id_user=Usuarios.objects.get(user_name=participante1),
                                fecha_registro=timezone.now()
                                )  
            part1.save()

            part2=Participantes(
                                id_conversacion=Conversaciones.objects.get(remitente=participante1,destinatario=participante2),
                                id_user=Usuarios.objects.get(user_name=participante2),
                                fecha_registro=timezone.now()
                                )
            part2.save()

            nueva_conversacion=Conversaciones.objects.get(remitente=participante1,destinatario=participante2)
            conver_reg=nueva_conversacion.id

        cht=Chats(
                id_conversacion=Conversaciones.objects.get(pk=conver_reg),
                id_user=Usuarios.objects.get(user_name=participante1),
                mensaje=request.POST['mensaje'],
                leido=False,
                fecha_registro=timezone.now()

                )
        cht.save()
        return HttpResponseRedirect(reverse("mensajes:usuario",args=(user_activo.id,)))

@login_required
def mismensajes(request):
    id_activo=request.user.username
    datos=Usuarios.listado_converacion(id_activo)
    #datos=json(datos)
    # return render(request, 'conversaciones.html',{
    #     "datos":datos
    # })

    #return HttpResponseRedirect(reverse("mensajes:mismensajes",args=(datos,)))
    #return json(datos)
    return JsonResponse(datos,safe=False)

@login_required
def listadochat(request,remitente):
    id_activo=request.user.username
    datos=Usuarios.listado_chat(id_activo,remitente)
    #datos=json(datos)
    # return render(request, 'conversaciones.html',{
    #     "datos":datos
    # })

    #return HttpResponseRedirect(reverse("mensajes:mismensajes",args=(datos,)))
    #return json(datos)
    return JsonResponse(datos,safe=False)
    

