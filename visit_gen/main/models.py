from django.db import models


class VisitCard(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False)
    phone_number = models.CharField(max_length=20, blank=False)
    email = models.EmailField(blank=False)
    telegram = models.URLField(blank=True, max_length=255)
    vk = models.URLField(blank=True, max_length=255)
    youtube = models.URLField(blank=True, max_length=255)
    address = models.CharField(blank=True, max_length=255)
    type_activ = models.CharField(blank=True, max_length=255)
    director = models.CharField(blank=True, max_length=255)
    site_url = models.URLField(blank=True, max_length=255)
    is_org = models.BooleanField(blank=False)

    def __str__(self):
        return f'{self.id} > {self.name}'
