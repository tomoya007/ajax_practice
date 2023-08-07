import axios from 'axios';
import { StoryData } from '../types/types';  // パスが正しいか確認してください。

const API_URL = 'http://localhost:8000/';

export const fetchSomeData = async (sceneId: number): Promise<StoryData> => {
  const response = await axios.get<StoryData>(`${API_URL}story/${sceneId}/`);
  return response.data;
}

// 'export type' を使用して、型を再エクスポートします。
export type { StoryData };
