from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('story/<int:id>/', views.StoryView.as_view(), name='story_detail'),
    path('api/stories/', views.StoryList.as_view(), name='story-list'),
    path('api/characters/', views.CharacterList.as_view(), name='character-list'),
    path('api/choices/', views.ChoiceList.as_view(), name='choice-list'),
    path('api/story-characters/', views.StoryCharacterList.as_view(), name='story-character-list'),
]
