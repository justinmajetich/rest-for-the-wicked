from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    linked_items = models.CharField(max_length=100)
    linked_poi = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE)


class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    origin_poi_name = models.CharField(max_length=100)
    use_poi_name = models.CharField(max_length=100)


'''
Items have origin_poi FK
POI object will have relationship to all items that originate, 
accessed through linked_poi
Return as a list
'''