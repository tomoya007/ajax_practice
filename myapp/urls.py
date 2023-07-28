from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('change_text/', views.change_text, name='change_text'),
]
