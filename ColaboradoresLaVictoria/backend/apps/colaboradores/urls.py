from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ColaboradorViewSet, RetirarColaboradorView

router = DefaultRouter()

router.register(r"colaborador", ColaboradorViewSet, basename="colaborador")

urlpatterns = [
    path("", include(router.urls)),
    path("retirar_colaborador/<int:pk>/", RetirarColaboradorView.as_view(), name="retirar-colaborador"),
]

"""
Cómo consumir las APIs de esta app:

-----------------------------------------------------------------
Para consumir cualquiera de las APIs hay que incluir el token de acceso en los parámetros de la función, ejemplo:

const api = "http://localhost:8000/api"
const token = localStorage.getItem("token")

const response = await api.post('/colaboradores/colaborador/', {
      nombre: nombre del colaborador,
      ...
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
-----------------------------------------------------------------

1. registrar un colaborador (método POST):
"http://127.0.0.1:8000/api/colaboradores/colaborador/"
y enviar como parámetros los datos del colaborador

2. editar uno o varios datos de un colaborador (método PATCH):
`http://127.0.0.1:8000/api/colaboradores/colaborador/${id del colaborador a editar}`
y enviar los datos a editar

3. listar todos los colaboradores (método GET):
"http://127.0.0.1:8000/api/colaboradores/colaborador/"

4. retirar un colaborador (método PATCH):
"http://127.0.0.1:8000/api/colaboradores/retirar_colaborador/${id del colaborador a retirar}/"

5. filtrar colaboradores por...
"""
