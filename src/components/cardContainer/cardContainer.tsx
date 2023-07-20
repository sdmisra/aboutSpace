import React, {FC} from 'react'
import { ContainerProps } from '../../interfaces/containerProps'
import StoryCard from '../StoryCard/StoryCard'
import './CardContainer'

interface container {
  stories: ContainerProps[];
}

const CardContainer = (props : container) => {
  const stories = props.stories.map((story, i) => <StoryCard details={story} key={i}/>)

  return (
    <section className="stories-browser">
      {stories}
    </section>
  )
}

export default CardContainer;