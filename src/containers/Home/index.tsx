import React from 'react';

const Home = () => {
  console.log(localStorage.getItem('favoriteCoin'));
  // TODO: фечить любимый коин по uuid,
  // добавить поиск наверное ...
  
  return(
    <>
      Home
    </>
  );
};

export default Home;
