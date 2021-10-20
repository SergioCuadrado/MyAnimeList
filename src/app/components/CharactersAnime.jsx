import React from 'react';
import useGetCharactersAnime from '../hooks/useGetCharactersAnime';

const CharactersAnime = ({ id }) => {
  const APICharacters = `https://kitsu.io/api/edge/anime/${id}/characters`;
  const characters = useGetCharactersAnime(APICharacters);

  /*  if (characters.attributes != undefined) {
    console.log(characters.attributes.canonicalName);
  } else {
    console.log('No entro');
  } */

  //console.log(characters);

  return (
    <div>
      <h3>Characters</h3>
      <p>ID: {id}</p>
      {/*If you do not ask if it is 'undefined', it does not work.  */}
      {/* <p>{characters.attributes != undefined && characters.attributes.canonicalName}</p> */}
    </div>
  );
};

export default CharactersAnime;
