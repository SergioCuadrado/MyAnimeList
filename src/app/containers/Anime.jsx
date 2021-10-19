import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetAnime from '../hooks/useGetAnime';

import '../assets/styles/containers/Anime.css';

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
      <section className="listAnime">
        {animesmanga.map((anime) => (
          <div className="listAnime__anime" key={anime.id}>
            <h3>{anime.attributes.canonicalTitle}</h3>
            <Link
              to={{
                pathname: `anime/${anime.id}`,
                state: { anime },
              }}
            >
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />
            </Link>
          </div>
        ))}
      </section>
      <div className="buttonsAnime">
        <button className="buttonsAnime__button-decrement" onClick={decrementPages}>
          Back
        </button>
        <button className="buttonsAnime__button-increment" onClick={incrementPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Anime;
