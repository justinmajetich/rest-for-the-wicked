from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class POI(models.Model):
    '''
    Point of Interest class
    '''
    name = models.CharField(max_length=100, primary_key=True, unique=True) # name of point of interest. Is a Primary Key
    description = models.TextField() # POI description
    parent = models.ForeignKey('POI',  to_field='name', on_delete=models.SET_NULL, blank=True, null=True, related_name='children') # POI parent. Has related name of 'child'.
    needs_key = models.ForeignKey('Item',  to_field='name', on_delete=models.SET_NULL, blank=True, null=True) # Does POI require a key or not.
    full_path = models.CharField(max_length=100) # the full url/path

class Item(models.Model):
    '''
    Item class
    '''
    name = models.CharField(max_length=100, primary_key=True, unique=True) # name of Item. Is primary key
    description = models.TextField() # Item description
    spawn_poi = models.ForeignKey(POI, to_field='name', null=True, on_delete=models.SET_NULL, related_name='spawned_items') # What POI is this item spawned from? Is a Foreign Key
    use_poi = models.ForeignKey(POI,  to_field='name', blank=True, null=True, on_delete=models.SET_NULL, related_name='usable_items') # What POI uses this Item? Is a Foreign Key
    is_key = models.BooleanField(default=False) # Is the item a key?