import React, { useState } from 'react';
import useGetAnime from '../hooks/useGetAnime';

const Anime = () => {
  const [pages, setPages] = useState(0);

  const APIAnime = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${pages}`;
  const animesmanga = useGetAnime(APIAnime);

  // Show 20 new animes
  const incrementPages = () => {
    // Number max of animes
    if (pages < 17060) setPages(pages + 20);
  };

  const decrementPages = () => {
    if (pages > 0) setPages(pages - 20);
  };

  return (
    <div>
      <p>List of animes</p>
      <section className="ListAnime">
        {animesmanga.map((anime) => (
          <div key={anime.id}>
            <h3>{anime.attributes.slug}</h3>
            <img src={anime.attributes.posterImage.tiny} alt={anime.attributes.slug} />
          </div>
        ))}
        <button onClick={decrementPages}>Back</button>
        <button onClick={incrementPages}>Next</button>
      </section>
    </div>
  );
};

export default Anime;
