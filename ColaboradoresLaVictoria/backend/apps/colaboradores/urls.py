from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ColaboradorViewSet, RetirarColaboradorView

router = DefaultRouter()

router.register(r"colaborador", ColaboradorViewSet, basename="colaborador")

urlpatterns = [
    path("", include(router.urls)),
    path("retirar_colaborador/<int:pk>/", RetirarColaboradorView.as_view(), name="retirar-colaborador"),
]
