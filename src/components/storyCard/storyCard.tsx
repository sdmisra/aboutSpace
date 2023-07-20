import React from 'react'
import { ContainerProps } from '../../interfaces/containerProps';
import './storyCard.css'

interface Story {
  details: ContainerProps
}

const StoryCard = (props : Story )=> {
  const info = props.details
  const pubDate = info.published_at.slice(0,10).split('-')
  return (
    <section className='story-card'>
      <img className='thumb' src={info.image_url} alt={info.title}></img>
      <div className='text-details'>
        <span>Source: {info.news_site}</span>
        <span>Published: {`${pubDate[1]}-${pubDate[2]}-${pubDate[0]}`}</span>
        <h4 className="story-title">{info.title}</h4>
        <p className='story-summary'>{info.summary}</p>
        <a    
        className="article-link"  
        href= {info.url}     
        target="_blank"
        rel="noopener noreferrer"
            >
              Full Article
        </a>
      </div>
    </section>
  )
}

export default StoryCard;