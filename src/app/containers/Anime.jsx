import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useGetAnime from '../hooks/useGetAnime';
import Search from '../components/Search';

import '../assets/styles/containers/Anime.css';

const Anime = () => {
  const [pages, setPages] = useState(0);
  const [dataSearch, setDataSearch] = useState([]);
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

  // Get data from the child component 'Search' from the input
  const pull_data = (data) => {
    setDataSearch(data);
    console.log('data', dataSearch);
  };

  return (
    <div className='listofAnime'>
      <h2>List of animes</h2>
      <Search func={pull_data} />
      <section className="listAnime">
        {dataSearch.length !== 0
          ? dataSearch.map((anime) => (
              <div className="listAnime__anime" key={anime.id}>
                <h3>{anime.attributes.canonicalTitle}</h3>
                <Link
                  to={{
                    pathname: `anime/${anime.id}`,
                    state: { anime },
                  }}
                  className="links"
                >
                  <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />
                </Link>
              </div>
            ))
          : animesmanga.map((anime) => (
              <div className="listAnime__anime" key={anime.id}>
                <h3>{anime.attributes.canonicalTitle}</h3>
                <Link
                  to={{
                    pathname: `anime/${anime.id}`,
                    state: { anime },
                  }}
                  className="links"
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

{
  /* <div className="listAnime__anime" key={dataSearch.data.id}>
            <h3>{dataSearch.data.attributes.canonicalTitle}</h3>
          </div> */
}

/* {animesmanga.map((anime) => (
          <div className="listAnime__anime" key={anime.id}>
            <h3>{anime.attributes.canonicalTitle}</h3>
            <Link
              to={{
                pathname: `anime/${anime.id}`,
                state: { anime },
              }}
              className="links"
            >
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />
            </Link>
          </div>
        ))} */

/* 
  {dataSearch != '' ? (
          <h3>Funciona!</h3>
        ) : (
          animesmanga.map((anime) => (
            <div className="listAnime__anime" key={anime.id}>
              <h3>{anime.attributes.canonicalTitle}</h3>
              <Link
                to={{
                  pathname: `anime/${anime.id}`,
                  state: { anime },
                }}
                className="links"
              >
                <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} title={anime.attributes.slug} />
              </Link>
            </div>
          ))
        )}
  
  */
