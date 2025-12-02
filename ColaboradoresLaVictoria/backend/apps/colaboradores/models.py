from django.db import models

class Colaborador(models.Model):
    AREAS = [
        ("Administración", "Administración"),
        ("Portería", "Portería"),
        ("Celadores", "Celadores"),
        ("Bloque madre", "Bloque madre"),
        ("Bancos", "Bancos"),
        ("Presiembra", "Presiembra"),
        ("Siembra", "Siembra"),
        ("Riego", "Riego"),
        ("Fitosanidad", "Fitosanidad"),
        ("Corte", "Corte"),
        ("Corte girasol y statice", "Corte girasol y statice"),
        ("Armada de girasol y statice", "Armada de girasol y statice"),
        ("Sala", "Sala"),
        ("Mercados especiales", "Mercados especiales"),
        ("Bouquet", "Bouquet"),
        ("Boton y descabece", "Boton y descabece"),
        ("Monitores", "Monitores"),
        ("Desmalece", "Desmalece"),
        ("Mallas", "Mallas"),
        ("Polietileno", "Polietileno"),
        ("Embarazadas", "Embarazadas"),
        ("Incapacidades largas", "Incapacidades largas"),
        ("Licencia maternidad", "Licencia maternidad"),
        ("Aprendices Sena", "Aprendices Sena"),
        ("Mantenimiento", "Mantenimiento"),
        ("Portería", "Portería"),
        ("Aseo", "Aseo")
    ]

    CARGO = [
        ("Operario agrícola", "Operario agrícola"),
        ("Administración", "Administración"),
        ("Celadores", "Celadores"),
        ("Aprendices", "Aprendices")
    ]

    TIPO_CONTRATO = [
        ("Fijo", "Fijo"),
        ("Término indefinido", "Término indefinido"),
        ("Obra o lavor", "Obra o lavor"),
        ("Tiempo parcial", "Tiempo parcial"),
        ("Prestación de servicios", "Prestación de servicios")
    ]

    CARGO = [
        ("Operario agrícola", "Operario agrícola"),
        ("Administración", "Administración"),
        ("Celadores", "Celadores")
    ]

    nombre = models.CharField(max_length=50)
    tipo_doc = models.CharField(max_length=35)
    cedula = models.IntegerField()
    area = models.CharField(choices=AREAS, default="Bouquet", max_length=30)
    cargo = models.CharField(choices=CARGO, default="", max_length=18)
    tipo_contrato = models.CharField(choices=TIPO_CONTRATO, default="Fijo", max_length=25)
    vigencia_contrato = models.DateField()
    contacto_emergencia = models.JSONField() # nombre y teléfono
    num_cuenta_banco = models.BigIntegerField()
    fecha_ingreso = models.DateField()
    salario_base = models.DecimalField(max_digits=10, decimal_places=2)
    antiguedad_en_empresa = models.CharField(max_length=25)
    nacionalidad = models.CharField(max_length=50)
    eps = models.CharField(max_length=60)
    fondo_pension = models.CharField(max_length=90)
    caja_compensacion = models.CharField(max_length=90)
    direccion_vivienda = models.CharField(max_length=50)
    municipio = models.CharField(max_length=30)
    estrato = models.IntegerField()
    telefono = models.CharField(max_length=16)
    fecha_nacimiento = models.DateField()
    edad = models.IntegerField()
    sexo = models.CharField(max_length=10)
    cant_hijos = models.PositiveIntegerField(default=0)
    estado_civil = models.CharField(max_length=15)
    escolaridad = models.CharField(max_length=20)
    tipo_sangre = models.CharField(max_length=10)

    # Para aprendices/practicantes:
    inicio_lectiva = models.DateField(null=True, blank=True)
    fin_lectiva = models.DateField(null=True, blank=True)
    inicio_practica = models.DateField(null=True, blank=True)
    fin_practica = models.DateField(null=True, blank=True)
    institucion = models.CharField(max_length=30, blank=True, null=True)
    responsable_aprendiz = models.CharField(max_length=50, blank=True, null=True)

    # Para colaboradores retirados:
    retirado = models.BooleanField(default=False)


    class Meta:
        verbose_name_plural = "Colaboradores"
        verbose_name = "Colaborador"

    def __str__(self):
        return f"{self.nombre, self.cedula}"
