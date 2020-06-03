from django.urls import path
from .views import PostListView
from . import views

urlpatterns = [
    path('poi/', views.poi, name='poi-home'),
    path('items/', views.items, name='poi-item'),
]