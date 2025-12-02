#pylint: disable=no-member
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Colaborador
from .serializers import RegistrarColaboradorSerializer, RetirarColaboradorSerializer

class ColaboradorViewSet(ModelViewSet):
    queryset = Colaborador.objects.all()
    serializer_class = RegistrarColaboradorSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({
            "message": "Colaborador eliminado correctamente"
            }, status=status.HTTP_200_OK
        )


class RetirarColaboradorView(APIView):
    http_method_names = ["patch"]

    def patch(self, request, pk):
        instancia = get_object_or_404(Colaborador, pk=pk)

        serializer = RetirarColaboradorSerializer(
            instancia,
            data=request.data,
            partial=True
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            "message": "colaborador mretirado correctamente"
        }, status=status.HTTP_200_OK)


# FILTRAR COLABORADORES POR AREA, CARGO, TIPO_CONTRATO, NACIONALIDAD, EDAD, SEXO, ESTADO CIVIL