import React from 'react'
import { ContainerProps } from '../../interfaces/containerProps'
import StoryCard from '../StoryCard/StoryCard'
import './CardContainer.css'

interface container {
  stories: ContainerProps[];
  prevPath: string;
  nextPath: string;
  scrollPage:(path: string) => void
}

const CardContainer = (props : container) => {
  console.log(props.prevPath, props.nextPath)

  const stories = props.stories.map((story, i) => <StoryCard details={story} key={i}/>)

  return (
    <section className="stories-browser">
      {stories}
      <div className='buttons'>
      {props.prevPath?.length > 0 && <button onClick={()=> props.scrollPage(props.prevPath)}>Previous</button>}
        <button onClick={()=>props.scrollPage(props.nextPath)}>More Results</button>
      </div>
    </section>
  )
}

export default CardContainer;