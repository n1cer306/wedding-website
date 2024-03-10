from django.contrib import admin
from .models import Atricles, Absence, Later

admin.site.site_title = 'Панель администратора'
admin.site.site_header = 'Панель администратора'

admin.site.register(Atricles)
admin.site.register(Absence)
admin.site.register(Later)