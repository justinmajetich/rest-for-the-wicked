from django.urls import path
from .views import PostListView
from . import views

urlpatterns = [
    path('poi/', views.home, name='poi-home'),
    path('item/', views.item, name='poi-item'),
]