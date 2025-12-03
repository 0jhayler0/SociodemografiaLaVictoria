import django_filters
from .models import Colaborador

class ColaboradorFilter(django_filters.FilterSet):
    rango_vig_contrato = django_filters.DateFromToRangeFilter(field_name="vigencia_contrato")
    class Meta:
        model = Colaborador
        fields = {
            "area": ["exact"],
            "cargo": ["exact"],
            "tipo_contrato": ["exact"],
            "vigencia_contrato": ["exact"],
            "salario_base": ["exact", "gte", "lte"],
            "antiguedad_en_empresa": ["exact"],
            "nacionalidad": ["exact"],
            "municipio": ["exact"],
            "estrato": ["exact", "gte", "lte"],
            "edad": ["exact", "gte", "lte"],
            "sexo": ["exact"],
            "estado_civil": ["exact"],
            "escolaridad": ["exact"],
            "retirado": ["exact"]
        }
