from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class POI(models.Model):
    name = models.CharField(max_length=100, primary_key=True, unique=True)
    description = models.TextField()
    # many to many relationship
    parent = models.ForeignKey('POI',  to_field='name', on_delete=models.CASCADE, blank=True, null=True, related_name='children')
    needs_key = models.ForeignKey('Item',  to_field='name', on_delete=models.CASCADE, blank=True, null=True)
    full_path = models.CharField(max_length=100)

    #backrefs spawnded_items, usable_items


class Item(models.Model):
    name = models.CharField(max_length=100, primary_key=True, unique=True)
    description = models.TextField()
    spawn_poi = models.ForeignKey(POI, to_field='name', on_delete=models.CASCADE, related_name='spawned_items')
    use_poi = models.ForeignKey(POI,  to_field='name', on_delete=models.CASCADE, related_name='usable_items')
    is_key = models.BooleanField(default=False)
    
    
    '''
    name:
    full_path:
    contained_items: [{name: "stapler", description: "blah blah blah"}],
    needsKey: null / {name :"keycard", description:"has dr. name"},
    usable_items: ["gun", "key_card"],
    linked_poi: ["research_wing"]
    '''