import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

import CharactersAnime from '../components/CharactersAnime';

import '../assets/styles/containers/DescriptionAnime.css';

const DescriptionAnime = () => {
  // Get anime information
  const location = useLocation();
  const { anime } = location.state;
  const [informationCharacter, setinformationCharacter] = useState([]);

  console.log('Anime: ', anime);
  let numero = Number(anime.attributes.averageRating);
  let synopsis = anime.attributes.synopsis.replace('[Written by MAL Rewrite]', '');
  /* const pull_data = (data) => {
    /* for (let i = 0; i < data.length; i++) {
    } 
    fetch(data[0])
      .then((response) => response.json())
      .then((data) => setinformationCharacter(data))
      .catch((error) => console.error(error.message));

    console.log('INFO:', informationCharacter);
  }; */

  let sendData = () => {
    let id = anime.id;
    let title = anime.attributes.canonicalTitle;
    let type = anime.attributes.showType;
    //let synopsis = anime.attributes.synopsis;
    let url_image = anime.attributes.posterImage.small;
    let episodeCount = anime.attributes.episodeCount ? anime.attributes.episodeCount : 0;

    let dataAnime = [id, title, type, synopsis, url_image, episodeCount];
    axios
      .post(location.pathname, dataAnime)
      .then((res) => console.log('Data send'))
      .catch((error) => console.log(error.data));
  };

  return (
    <section className="descriptionAnime">
      <div className="descriptionAnime__left">
        <h2 className="descriptionAnime__left-title">{anime.attributes.canonicalTitle}</h2>
        <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />

        <div className="descriptionAnime__Information">
          <h4>Information</h4>
          <p>
            Type: <span>{anime.attributes.showType}</span>
          </p>
          <p>
            Episodes: <span>{anime.attributes.episodeCount ? anime.attributes.episodeCount : 'Unknown'}</span>
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
        <button className="descriptionAnime__left-button" onClick={sendData}>
          Add to my List
        </button>
      </div>

      <div className="descriptionAnime__right">
        <div className="descriptionAnime__right-ranks">
          <div className="descriptionAnime__right-score">
            <span>Score</span>
            <p>{(numero / 10).toFixed(2)}</p>
          </div>
          <div className="descriptionAnime__right-ranked">
            <p>
              <span>Ranked</span> #{anime.attributes.ratingRank}
            </p>
          </div>
          <div className="descriptionAnime__right-popularity">
            <p>
              <span>Popularity</span> #{anime.attributes.popularityRank}
            </p>
          </div>
          <div className="descriptionAnime__right-users">
            <p>
              <span>Users</span> {anime.attributes.userCount}
            </p>
          </div>
          <div className="descriptionAnime__right-video">
            <iframe width="200" height="115" src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}></iframe>
          </div>
        </div>
        <h3>Synopsis</h3>
        <p>{synopsis}</p>
        <CharactersAnime id={anime.id} />
      </div>
    </section>
  );
};

export default DescriptionAnime;

// <Link to={`anime/${anime.id}`} state={{ from: 'occupation' }}>
