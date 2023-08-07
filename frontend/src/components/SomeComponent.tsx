import React, { useEffect, useState } from 'react';
import { fetchSomeData, StoryData } from '../api/api';

const SomeComponent = () => {
  // 現在のシーンIDをstateで管理
  const [currentSceneId, setCurrentSceneId] = useState<number>(1);
  const [data, setData] = useState<StoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSomeData(currentSceneId);
      setData(result);
    };

    fetchData();
  }, [currentSceneId]); // currentSceneIdの変更を監視して、変更があった場合にデータを再取得

  // 選択肢をクリックした際のハンドラー
  const handleChoiceClick = (nextSceneId: number) => {
    setCurrentSceneId(nextSceneId);  // 新しいシーンIDをセット
  };

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <img src={data.background_image} alt="background" />
          <ul>
            {data.choices.map((choice, index) => (
              <li key={index} onClick={() => handleChoiceClick(choice.nextSceneId)}>
                {choice.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SomeComponent;
