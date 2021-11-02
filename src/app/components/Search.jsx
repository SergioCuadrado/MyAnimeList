import React, { useState } from 'react';

import '../assets/styles/components/Search.css';

const Search = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const [data, setData] = useState([]);
  const searchItems = (searchValue) => {
    searchValue = searchValue.replace(' ', '%20').toLowerCase();
    setSearchInput(searchValue);

    if (searchInput != '') {
      fetch(`${URL}${searchInput}&page[limit]=20`)
        .then((response) => response.json())
        .then((data) => setData(data.data))
        .catch((error) => console.error(error.message));
    } else if (searchInput == '') {
      setData([]);
    }
    props.func(data);
  };

  let URL = 'https://kitsu.io/api/edge/anime?filter[text]=';

  return (
    <div className="Search">
      <input placeholder="Search Anime" type="text" onChange={(e) => searchItems(e.target.value)} />
    </div>
  );
};

export default Search;
