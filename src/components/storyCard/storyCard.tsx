import React from 'react'
import { ContainerProps } from '../../interfaces/containerProps';
import './StoryCard'

interface Story {
  details: ContainerProps
}

const StoryCard = (props : Story )=> {
  const info = props.details
  console.log(info)
  return (
    <h3 className="story-title">{info.title}</h3>
  )
}

export default StoryCard;