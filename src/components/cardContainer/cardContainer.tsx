import React, {Dispatch, SetStateAction} from 'react'
import { ContainerProps } from '../../interfaces/containerProps'
import StoryCard from '../StoryCard/StoryCard'
import getArticles from '../../apiCalls'
import './CardContainer'

interface container {
  stories: ContainerProps[];
  prevPath: string;
  nextPath: string;
  setArticles: Dispatch<SetStateAction<never[]>>
  setNextPath: Dispatch<SetStateAction<string>>
  setPrevPath: Dispatch<SetStateAction<string>>
}

const CardContainer = (props : container) => {
  console.log(props.prevPath, props.nextPath)

  const scrollPage = (path: string) => {
    getArticles(path).then( data => {
      props.setArticles(data.results)
      props.setNextPath(data.next)
      props.setPrevPath(data.previous)
    }
    )
  }

  const stories = props.stories.map((story, i) => <StoryCard details={story} key={i}/>)

  return (
    <section className="stories-browser">
      {stories}
      <div className='buttons'>
        <button onClick={()=> scrollPage(props.prevPath)}>Previous</button>
        <button onClick={()=>scrollPage(props.nextPath)}>More Results</button>
      </div>
    </section>
  )
}

export default CardContainer;