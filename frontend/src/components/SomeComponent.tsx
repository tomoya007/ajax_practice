import React, { useEffect, useState } from 'react';
import { fetchSomeData } from '../api/api';
import { StoryData } from '../types/types'; // StoryData を import
import '../App.css';

const SomeComponent = () => {
  const [currentSceneId, setCurrentSceneId] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stories, setStories] = useState<StoryData[]>([]);  // APIから取得したストーリーデータの型をStoryData[]に変更

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSomeData(currentSceneId);
        setStories([result]);  // APIから取得したデータをセット
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError("データの取得に失敗しました。");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentSceneId]);

  const handleChoiceClick = (nextSceneId: number) => {
    setCurrentSceneId(nextSceneId);
    setIsLoading(true);
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <p>読み込み中...</p>  // ロード中のメッセージを表示
      ) : (
        <div>
          {/* APIから取得したデータを表示 */}
          {stories.map(story => (
            <div key={story.id}>
              <h3>{story.title}</h3>
              <p>{story.content}</p>
              {/* 他の情報も必要であれば表示 */}
            </div>
          ))}
          {/* 例えば、次のシーンに移動するための選択肢やボタン等 */}
        </div>
      )}
    </div>
  );
};

export default SomeComponent;
