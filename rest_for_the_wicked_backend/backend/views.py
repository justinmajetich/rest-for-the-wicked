from django.shortcuts import render
from .models import POI, Item
from django.db import models
from django.http.response import JsonResponse
from rest_framework import serializers, viewsets
from django.forms.models import model_to_dict
from backend.serializers import POISerializer, ItemSerializer

class PoiViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = POI.objects.all()
    serializer_class = POISerializer

class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    """ def poi(request):
    poi_list = []
    for poi in POI.objects.all():
        children_list = []
        for child in poi.children.all():
            children_list.append(model_to_dict(child))
        spawned_items_list = []
        for item in poi.spawned_items.all():
            spawned_items_list.append(model_to_dict(item))
        usable_items_list = []
        for item in poi.usable_items.all():
            usable_items_list.append(model_to_dict(item))
        poi = model_to_dict(poi)
        poi['children'] = children_list
        poi['usable_items'] = usable_items_list
        poi['spawned_items'] = spawned_items_list
        poi_list.append(poi)
    return JsonResponse({'poi': poi_list})


def items(request):
    items_list = []
    for item in Item.objects.all():
        items_list.append(model_to_dict(item))
    return JsonResponse({'items': items_list}) """




'''
Create list of items and pass over as spawned_items
Route to request poi by name
'''