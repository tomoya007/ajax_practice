from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # 更新
    path('story/<int:id>/', views.StoryView.as_view(), name='story_detail'),
]
