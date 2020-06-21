from django.contrib import admin
from .models import POI, Item


'''
This file adds POI and Items to the admin page
'''

'''
POI link on admin page
'''
admin.site.register(POI)

'''
Item link on admin page
'''
admin.site.register(Item)
