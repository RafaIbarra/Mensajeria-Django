from django.urls import path
from . import views

app_name="mensajes"
urlpatterns = [
    path('', views.home, name='home'),
    path("registrousuario/",views.registro_usuario,name="registro_usuario"),
    path("<int:id_usuario>/usuario/",views.usuario,name="usuario"),
    path("signin/",views.signin,name="signin"),
    path("signout/",views.signout,name="signout"),
    path("registroconversacion/",views.registro_conversacion,name="registro_conversacion"),
    path("mismensajes/",views.mismensajes,name="mismensajes"),
    path("chats/<str:remitente>/",views.listadochat,name="listadochat"),
    # path('admin/', admin.site.urls),
    # path('signup/', views.signup, name='signup'),
    # path('tasks/', views.tasks, name='tasks'),
    # path('tasks_completed/', views.tasks_completed, name='tasks_completed'),
    # path('logout/', views.signout, name='logout'),
    # path('signin/', views.signin, name='signin'),
    # path('create_task/', views.create_task, name='create_task'),
    # path('tasks/<int:task_id>', views.task_detail, name='task_detail'),
    # path('taks/<int:task_id>/complete', views.complete_task, name='complete_task'),
    # path('tasks/<int:task_id>/delete', views.delete_task, name='delete_task'),
]   