from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ColaboradorViewSet

router = DefaultRouter()

router.register(r"colaborador", ColaboradorViewSet, basename="colaborador")

urlpatterns = [
    path("", include(router.urls))
]
