import React from 'react'
import { ContainerProps } from '../../interfaces/containerProps';
import './StoryCard.css'

interface Story {
  details: ContainerProps
}

const StoryCard = (props : Story )=> {
  const info = props.details
  console.log(info)
  return (
    <section className='story-card'>
      <img className='thumb' src={info.image_url} alt={info.title}></img>
      <div className='text-details'>
        <h4 className="story-title">{info.title}</h4>
        <p className='story-summary'>{info.summary}</p>
        <a    
        className="article-link"  
        href= {info.url}     
        target="_blank"
        rel="noopener noreferrer"
            >
              Link
        </a>
      </div>
    </section>
  )
}

export default StoryCard;