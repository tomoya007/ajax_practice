import React, { useEffect, useState } from 'react';
import { fetchSomeData, StoryData } from '../api/api';

const SomeComponent = () => {
  const [data, setData] = useState<StoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSomeData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.content}</p>
          <img src={data.background_image} alt="background" />
          <ul>
            {data.choices.map((choice, index) => (
              <li key={index}>{choice}</li>
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
