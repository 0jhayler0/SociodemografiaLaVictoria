from django.contrib import admin
from .models import UsuarioAdmin

@admin.register(UsuarioAdmin)
class AdministradorAdmin(admin.ModelAdmin):
    list_display = ("username", "email")
