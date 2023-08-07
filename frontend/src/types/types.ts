export interface StoryData {
  title: string;
  content: string;
  background_image: string;
  choices: Choice[];
}

export interface Choice {
  text: string;
  nextSceneId: number;
}