from django.conf import settings
from django.db import models

class Story(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    background_image = models.CharField(max_length=255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Character(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Choice(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    choice_text = models.TextField()

    def __str__(self):
        return self.choice_text

class StoryCharacter(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE)
    character = models.ForeignKey(Character, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('story', 'character')

    def __str__(self):
        return f"{self.story.title} - {self.character.name}"
