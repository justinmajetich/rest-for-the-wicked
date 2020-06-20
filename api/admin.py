from django.contrib import admin
from .models import POI, Item

'''
POI link on admin page
'''
admin.site.register(POI)

'''
Item link on admin page
'''
admin.site.register(Item)
