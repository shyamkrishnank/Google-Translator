from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('translate/', translaterView.as_view())

]
