import { useEffect, useState } from 'react';

const [characters, setCharacters] = useState([]);

const getLinksCharacters = (url) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLinks(data.data))
      .catch((error) => console.log(error.message));
  }, [url]);

  // Save some links to anime characters
  let library = [];
  for (let i = 0; i < links.length; i++) {
    library.push(links[i].relationships.character.links.related);
  }

  return library;
};

const useGetCharactersAnime = (url) => {
  // Obtain links to the characters
  const library = getLinksCharacters(url);

  //let value = 'https://kitsu.io/api/edge/media-characters/46065/character';

  /* useEffect(() => {
    fetch(library[0])
      .then((response) => response.json())
      .then((data) => setCharacters(data.data))
      .catch((error) => console.error(error.message));
  }, [library[0]]); */

  useEffect(() => {
    for (let i = 0; i < library.length; i++) {
      fetch(library[i])
        .then((response) => response.json())
        .then((data) => setCharacters((pre) => [...pre, data.data]))
        .catch((error) => console.error(error.message));
    }
  }, []);

  //console.log(characters);
  return characters;
};

export default useGetCharactersAnime;
