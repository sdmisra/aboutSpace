import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getAllArticles from '../../apiCalls';
import CardContainer from '../cardContainer/cardContainer';

function App() {
  const [articles, setArticles] = useState([])
  const [nextPath, setNextPath] = useState('')
  const [prevPath, setPrevPath] = useState('')

  useEffect(()=> {
    getAllArticles().then(data => {
      setArticles(data.results)
      setNextPath(data.next)
      setPrevPath(data.previous)
    })
    console.log(articles)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="creator-link"
          href="https://github.com/sdmisra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my other work!
        </a>
      </header>
      <CardContainer stories = {articles}/>
    </div>
  );
}

export default App;