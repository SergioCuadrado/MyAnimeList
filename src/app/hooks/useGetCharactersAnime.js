import { useEffect, useState } from 'react';

/* const getLinksCharacters = (url) => {
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

  const [characters, setCharacters] = useState([]);
  //let value = 'https://kitsu.io/api/edge/media-characters/46065/character';

  /* useEffect(() => {
    fetch(library[0])
      .then((response) => response.json())
      .then((data) => setCharacters(data.data))
      .catch((error) => console.error(error.message));
  }, [library[0]]); 

  useEffect(() => {
    fetch([library])
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error(error.message));
  }, []);

  console.log(characters);
  return characters;
}; */

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
    //library.push(links[i].id);
  }

  return library;
};

const useGetCharactersAnime = (url) => {
  const library = getLinksCharacters(url);

  /* let finalData = [];
  for (const item of library) {
    const response = await fetch(item);
    const resData = await response.json();
    finalData.push(resData);
  }

  console.log(finalData);
  return finalData; */
  return library;
};

export default useGetCharactersAnime;
