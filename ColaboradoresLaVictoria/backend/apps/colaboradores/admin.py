from django.contrib import admin
from .models import Colaborador

@admin.register(Colaborador)
class ColaboradorAdmin(admin.ModelAdmin):
    list_display = ("nombre", "cedula", "cargo")
