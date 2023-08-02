from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404, render  # `render`をimportに追加
from .models import Story, Choice

class StoryView(View):
    def get(self, request, *args, **kwargs):
        story = get_object_or_404(Story, id=kwargs['id'])
        choices = Choice.objects.filter(story=story)
        data = {
            'title': story.title,
            'content': story.content,
            'background_image': story.background_image,
            'choices': [choice.choice_text for choice in choices]
        }
        return JsonResponse(data)

def index(request):
    return render(request, 'index.html')  # 'index.html'に変更
