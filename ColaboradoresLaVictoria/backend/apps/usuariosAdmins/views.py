from rest_framework.generics import CreateAPIView
from .models import UsuarioAdmin
from .serializers import UsuarioAdminSerializer

class UsuarioAdminView(CreateAPIView):
    queryset = UsuarioAdmin.objects.all()
    serializer_class = UsuarioAdminSerializer
