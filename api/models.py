from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class POI(models.Model):
    name = models.CharField(max_length=100, primary_key=True, unique=True)
    description = models.TextField()
    parent = models.ForeignKey('POI',  to_field='name', on_delete=models.SET_NULL, blank=True, null=True, related_name='children')
    needs_key = models.ForeignKey('Item',  to_field='name', on_delete=models.SET_NULL, blank=True, null=True)
    full_path = models.CharField(max_length=100)

class Item(models.Model):
    name = models.CharField(max_length=100, primary_key=True, unique=True)
    description = models.TextField()
    spawn_poi = models.ForeignKey(POI, to_field='name', null=True, on_delete=models.SET_NULL, related_name='spawned_items')
    use_poi = models.ForeignKey(POI,  to_field='name', null=True, on_delete=models.SET_NULL, related_name='usable_items')
    is_key = models.BooleanField(default=False)