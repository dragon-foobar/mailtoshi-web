import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div>
      <img className="w-10/12" src={mainHero.img} alt="mailtoshi logo" />
    </div>
  );
};

export default MainHeroImage;
