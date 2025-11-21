from django.contrib import admin
from .models import UsuarioAdmin

@admin.register(UsuarioAdmin)
class UsuarioAdministradorAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "last_login")
