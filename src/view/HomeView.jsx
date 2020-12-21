import React from 'react';
import Carousel from '../components/Carousel';
import CategoryCards from '../components/CategoryCards';

const HomeView = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards title="Mais Assistidos" />
      <CategoryCards title="Lançamentos" />
      <CategoryCards title="Internacionais" />
    </div>
  );
};

export default HomeView;
