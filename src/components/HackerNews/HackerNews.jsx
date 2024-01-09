import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function HackerNews() {
  // set dispatch
  const dispatch = useDispatch();

  // set store selectors
  const loading = useSelector((state) => state.hackerNews.loading);
  const articles = useSelector((state) => state.hackerNews.articles);
  console.log(articles);

  // on page load, get the articles from the db and update the articles store state
  useEffect(() => {
    dispatch(requestArticles);
  }, []);

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className='news-container'>
      <img className='logo' src='../../assets/hackerNews.jpeg' alt='' />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
