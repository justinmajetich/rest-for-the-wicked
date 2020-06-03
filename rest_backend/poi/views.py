from django.shortcuts import render
from .models import Post, Item
from django.views.generic import ListView
from django.http.response import JsonResponse


def home(request):
    context = {
        'poi_content': Post.objects.all()
    }
    return render(request, 'poi/home.html', context)


def item(request):
    context = {
        'item_content': Item.objects.all()
    }
    return render(request, 'poi/item.html', context)


def jsonify_models(request):
    data = {'name', 'description', 'linked_items', 'linked_poi', 'authors'}
    return JsonResponse(data)

class PostListView(ListView):
    model = Post
    template_name = 'poi/home.html'
    context_object_name = 'poi_content'

