#pylint: disable=no-member
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Colaborador
from .serializers import RegistrarColaboradorSerializer

class ColaboradorViewSet(ModelViewSet):
    queryset = Colaborador.objects.all()
    serializer_class = RegistrarColaboradorSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]
