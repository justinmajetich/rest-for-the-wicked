from api.models import POI, Item
from rest_framework import serializers


'''
Serializer converts model instanses to datatypes that can be rendered into JSON
'''


class POISerializer(serializers.HyperlinkedModelSerializer):
    '''
    Serialize POI to JSON
    '''
    class Meta:
        model = POI

        fields = [
            'name',
            'description',
            'alt_description',
            'parent',
            'needs_key',
            'spawned_items',
            'usable_items',
            'children']


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    '''
    Serialize Item to JSON
    '''
    class Meta:
        model = Item
        fields = ['name', 'description', 'spawn_poi', 'use_poi', 'is_key']
