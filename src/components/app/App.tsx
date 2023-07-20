import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getAllArticles from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';

function App() {
  const [articles, setArticles] = useState([])
  const [nextPath, setNextPath] = useState('')
  const [prevPath, setPrevPath] = useState('')

  useEffect(()=> {
    if (articles.length === 0) {
      getAllArticles().then(data => {
        setArticles(data.results)
        setNextPath(data.next)
        setPrevPath(data.previous)
      })
    }
    console.log(articles)
  }, [articles])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CardContainer stories = {articles}/>
    <footer>
    <a
          className="creator-link"
          href="https://github.com/sdmisra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my other work!
        </a>
    </footer>
    </div>
  );
}

export default App;