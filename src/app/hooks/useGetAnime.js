import { useEffect, useState } from 'react';

const useGetAnime = (url) => {
  const [animes, setAnime] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAnime(data.data))
      .catch((error) => console.log(error.message));
  }, [url]);
  return animes;
};

export default useGetAnime;
