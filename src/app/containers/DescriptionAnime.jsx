import React from 'react';
import { useLocation } from 'react-router';

import '../assets/styles/containers/DescriptionAnime.css';

const DescriptionAnime = (props) => {
  // Get anime information
  const location = useLocation();
  const { anime } = location.state;
  console.log('Anime: ', anime);
  return (
    <section className="descriptionAnime">
      <div className="descriptionAnime__left">
        <h2>{anime.attributes.canonicalTitle}</h2>
        <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />
        <button>Add to my List</button>
        <div className="descriptionAnime__Information">
          <h4>Information</h4>
          <p>
            Type: <span>{anime.attributes.showType}</span>
          </p>
          <p>
            Episodes: <span>{anime.attributes.episodeCount}</span>
          </p>
          <p>
            Status: <span>{anime.attributes.status}</span>
          </p>
          <p>
            Aired:{' '}
            <span>
              {anime.attributes.startDate} to {anime.attributes.endDate ? anime.attributes.endDate : '?'}
            </span>
          </p>
        </div>
      </div>

      <div className="descriptionAnime__right">
        <h3>Synopsis</h3>
        <p>{anime.attributes.synopsis}</p>
      </div>
    </section>
  );
};

export default DescriptionAnime;

// <Link to={`anime/${anime.id}`} state={{ from: 'occupation' }}>
