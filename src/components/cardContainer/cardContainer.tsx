import React, {FC} from 'react'
import { ContainerProps } from '../../interfaces/containerProps'
import './cardContainer'

interface container {
  stories: ContainerProps[];
}

const CardContainer = (props : container) => {
  console.log(props)
  return (
    <section className="stories-browser">

    </section>
  )
}

export default CardContainer;