import React, { useState, useEffect } from 'react';

import '../assets/styles/containers/AnimeList.css';

const AnimeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/animelist')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, ['/animelist']);

  console.log(data);
  return (
    <section className="myListanime">
      {data.map((anime) => (
        <div className="myListanime__anime" key={anime[0].id}>
          <div className="myListanime__anime-left">
            <h3>{anime[0].title}</h3>
            <img src={anime[0].url_image} alt={anime[0].title} title={anime[0].title} />
            <p>
              Type: <span>{anime[0].type}</span>
            </p>
            <p>
              episodeCount: <span>{anime[0].episodeCount}</span>
            </p>
          </div>
          <div className="myListanime__anime-right">
            <h3>Synopsis:</h3>
            <p>{anime[0].synopsis}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnimeList;
