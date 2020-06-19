from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from .models import POI, Item
from django.db import models
from django.http.response import JsonResponse
from rest_framework import serializers, viewsets
from django.forms.models import model_to_dict
from api.serializers import POISerializer, ItemSerializer

class PoiViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows users to be viewed or edited. """
    queryset = POI.objects.all()
    serializer_class = POISerializer

class ItemViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows users to be viewed or edited. """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

""" React app page """
index = never_cache(TemplateView.as_view(template_name='index.html'))
