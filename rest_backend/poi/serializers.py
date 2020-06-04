from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'description', 'linked_items', 'linked_poi', 'authors']

#class GroupSerializer(serializers.HyperlinkedModelSerializer):
