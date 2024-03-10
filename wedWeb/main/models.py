from django.db import models


class Atricles(models.Model):
    quest_1 = models.CharField(("Присутствие в загсе"), max_length=50)
    quest_2 = models.TextField(("Предпочтение в напитках"))
    quest_3 = models.CharField(("Способ передвижения"), max_length=50)
    names = models.CharField(('Имена и Фамилии'), max_length=100)


    class Meta:
        verbose_name = "Подтверждение присутствия"
        verbose_name_plural = "Подтверждение присутствия"


class Absence(models.Model):
    name = models.CharField(('Имена и фамилии'), max_length=100)
    presence = models.CharField(('Присутствие на свадьбе'), max_length=100, default="Не приду")

    class Meta:
        verbose_name = "Подтверждение отсутствия"
        verbose_name_plural = "Подтверждение отсутствия"

class Later(models.Model):
    name = models.CharField(('Имена и фамилии'), max_length=100)
    answer = models.CharField(('Присутствие на свадьбе'), max_length=30)

    class Meta:
        verbose_name = "Отвечу позже"
        verbose_name_plural = "Отвечу позже"