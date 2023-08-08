from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from .models import Story, Character, Choice, StoryCharacter
from .serializers import StorySerializer, CharacterSerializer, ChoiceSerializer, StoryCharacterSerializer

class StoryView(View):
    def get(self, request, *args, **kwargs):
        story = get_object_or_404(Story, id=kwargs['id'])
        choices = Choice.objects.filter(story=story)
        
        data = {
            'title': story.title,
            'content': story.content,
            'background_image': story.background_image.url if story.background_image else None,
            'choices': [
                {
                    "text": choice.choice_text,
                    "nextSceneId": choice.next_story.id if choice.next_story else None
                } 
                for choice in choices
            ]
        }
        
        return JsonResponse(data)

class StoryList(generics.ListAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer

class CharacterList(generics.ListAPIView):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class ChoiceList(generics.ListAPIView):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

class StoryCharacterList(generics.ListAPIView):
    queryset = StoryCharacter.objects.all()
    serializer_class = StoryCharacterSerializer

def index(request):
    return render(request, 'index.html')

