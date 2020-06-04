from django.shortcuts import render
from .models import Post, Item
from django.db import models
from django.views.generic import ListView
from django.http.response import JsonResponse
from rest_framework import serializers
from django.forms.models import model_to_dict


def poi(request):
   poi_list = []
   for poi in Post.objects.all():
       poi_list.append(model_to_dict(poi))
   return JsonResponse({'pois': poi_list})


def items(request):
    items_list = []
    for item in Item.objects.all():
        items_list.append(model_to_dict(item))
    return JsonResponse({'items': items_list})

class PostListView(ListView):
    model = Post
    template_name = 'poi/home.html'
    context_object_name = 'poi_content'
