import React from 'react';

import '../assets/styles/containers/NotFound.css';

const NotFound = () => {
  return (
    <section className="error">
      <section className="error__container">
        <h2 className="error__container--title">404</h2>
        <p>Page not Found</p>
      </section>
    </section>
  );
};

export default NotFound;
