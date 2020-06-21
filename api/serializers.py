from api.models import POI, Item
from rest_framework import serializers
'''
Meta class define what you model is, what field to serialzie
Use paramteres ?
'''

class POISerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = POI
        fields = ['name', 'description', 'alt_description', 'parent', 'needs_key', 'spawned_items', 'usable_items', 'children']

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'description', 'spawn_poi', 'use_poi', 'is_key']
