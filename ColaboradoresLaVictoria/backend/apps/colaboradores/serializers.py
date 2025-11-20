from rest_framework import serializers
from .models import Colaborador

class RegistrarColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = "__all__"

        # Si el colaborador no es un aprendiz se guarda la info del aprendiz como None/No aplica
        def create(self, validated_data):
            area = validated_data.get["area"]
            colab = Colaborador(**validated_data)

            if area != "Aprendices Sena":
                colab.inicio_lectiva = None
                colab.fin_lectiva = None
                colab.inicio_practica = None
                colab.fin_practica = None
                colab.responsable_aprendiz = "No aplica"

            colab.save()
            return colab
