import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import CategoryCards from '../components/CategoryCards';

const HomeView = () => {
  const [firstList, setfirstList] = useState([]);
  const [secondList, setsecondList] = useState([]);
  const [thirdList, setthirdList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/movie').then((res) => {
      setfirstList(res.data.slice(30, 60));
      setsecondList(res.data.slice(0, 30));
      setthirdList(res.data.slice(60, 90));
    });
  }, []);

  return (
    <div>
      <Carousel />
      <CategoryCards dataList={firstList} title="Mais Assistidos" />
      <CategoryCards dataList={secondList} title="Lançamentos" />
      <CategoryCards dataList={thirdList} title="Internacionais" />
    </div>
  );
};

export default HomeView;
