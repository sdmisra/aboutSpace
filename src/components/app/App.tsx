import React, { useEffect, useState } from 'react';

import './App.css';
import getArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const [articles, setArticles] = useState([])
  const [nextPath, setNextPath] = useState('')
  const [prevPath, setPrevPath] = useState('')

  useEffect(()=> {
    if (articles.length === 0) {
      getArticles().then(data => {
        setArticles(data.results)
        setNextPath(data.next)
        setPrevPath(data.previous)
      })
    }
    console.log(articles)
  }, [articles])

  return (
    <div className="App">
      <Header />
      <CardContainer stories = {articles} nextPath= {nextPath} prevPath={prevPath} setArticles={setArticles}
      setNextPath={setNextPath} setPrevPath={setPrevPath}/>
      <Footer />
    </div>
  );
}

export default App;