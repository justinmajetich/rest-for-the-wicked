from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class POI(models.Model):
    '''
    Point of Interest class
    '''

    # name of point of interest. Is a Primary Key
    name = models.CharField(max_length=100, primary_key=True, unique=True)

    # POI description
    description = models.TextField()

    # POI parent. Has related name of 'child'.
    parent = models.ForeignKey('POI', to_field='name',
                               on_delete=models.SET_NULL,
                               blank=True, null=True, related_name='children')

    # Does POI require a key or not.
    needs_key = models.ForeignKey(
        'Item', to_field='name', on_delete=models.SET_NULL,
        blank=True, null=True)

    # The full url/path
    full_path = models.CharField(max_length=100)


class Item(models.Model):
    '''
    Item class
    '''
    # Name of Item. Is primary key
    name = models.CharField(max_length=100, primary_key=True,
                            unique=True)
    # Item description
    description = models.TextField()

    # What POI is this item spawned from? Is a Foreign Key
    spawn_poi = models.ForeignKey(POI, to_field='name', null=True,
                                  on_delete=models.SET_NULL,
                                  related_name='spawned_items')

    # What POI uses this Item? Is a Foreign Key
    use_poi = models.ForeignKey(POI, to_field='name', blank=True, null=True,
                                on_delete=models.SET_NULL,
                                related_name='usable_items')
    # Is the item a key
    is_key = models.BooleanField(default=False)
