#pylint: disable=no-member
from rest_framework import serializers
from .models import Colaborador

class RegistrarColaboradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colaborador
        fields = "__all__"

    # Si el colaborador no es un aprendiz se guarda la info del aprendiz como None/No aplica
    def create(self, validated_data):
        area = validated_data.get("area")
        colab = Colaborador(**validated_data)
        if area != "Aprendices Sena": # CORREGIR SI EL COLABORADOR ES APRENDIZ, SUS CAMPOS SON OBLIGATORIOS
            colab.inicio_lectiva = None
            colab.fin_lectiva = None
            colab.inicio_practica = None
            colab.fin_practica = None
            colab.institucion = "No aplica"
            colab.responsable_aprendiz = "No aplica"
        colab.save()
        return colab


class RetirarColaboradorSerializer(serializers.Serializer):
    class Meta:
        model = Colaborador
        fields = ["retirado"]

    def update(self, instance, validated_data):
        instance.retirado = True
        instance.save()
        return instance
