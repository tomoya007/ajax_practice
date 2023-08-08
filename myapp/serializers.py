from rest_framework import serializers
from .models import Story, Character, Choice, StoryCharacter

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ['id', 'title', 'content', 'background_image']

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['id', 'name', 'description', 'image']

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ['id', 'story', 'choice_text', 'next_story']

class StoryCharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoryCharacter
        fields = ['id', 'story', 'character']
