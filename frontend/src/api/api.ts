import axios from 'axios';

const API_URL = 'http://localhost:8000/';

export type StoryData = {
  title: string;
  content: string;
  background_image: string;
  choices: string[];
}

export async function fetchSomeData(): Promise<StoryData> {
  const response = await axios.get(`${API_URL}story/1/`); 
  return response.data;
}
