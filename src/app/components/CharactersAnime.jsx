import React, { useState, useEffect } from 'react';
import useGetCharactersAnime from '../hooks/useGetCharactersAnime';

const CharactersAnime = ({ id }) => {
  const APICharacters = `https://kitsu.io/api/edge/anime/${id}/characters`;
  const library = useGetCharactersAnime(APICharacters);
  const [characters, setCharacters] = useState([]);

  console.log(library);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(library[0]);
      const newData = await response.json();
      setCharacters(newData);
    };

    getData();
    /* fetch(library[0])
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error.message)); */
  }, [library[0]]);

  console.log(characters);
  //console.log(library);
  //var characters = [];
  //console.log('characters:', characters);

  /* useEffect(() => {
    getData();
  }, []);

  const getData = async (characters) => {
    let finalData = [];
    for (const item of characters) {
      console.log('item', item);
      const response = await fetch(item);
      const resData = await response.json();
      finalData.push(resData);
    }

    setData(finalData);
  }; */

  /* useEffect(() => {
    fetch([library])
      .then((response) => response.json())
      .then((data) => setCharacters(characters.concat(data)))
      .catch((error) => console.log(error.message));
  }, []); */

  /* if (library != undefined) {
    for (const item of library) {
      fetch(item)
        .then((response) => response.json())
        .then((data) => setCharacters(characters.concat(data)))
        .catch((error) => console.log(error.message));
    }
  } */

  // console.log('Final', library);
  //console.log('Character', characters);
  //console.log(characters[0]);
  //console.log('LUFFY:', finalData.attributes);
  return (
    <div>
      <h3>Characters</h3>
      <p>ID: {id}</p>
      {/* {<div>{characters.length > 0 ? characters[0] : 'Hola'}</div>} */}

      {/* <p>{characters.attributes != undefined && characters.attributes.canonicalName}</p> */}
    </div>
  );
};

export default CharactersAnime;
