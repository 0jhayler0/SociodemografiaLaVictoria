from django.urls import path
from .views import UsuarioAdminView

urlpatterns = [
    path('register/', UsuarioAdminView.as_view(), name="regiter")
]
