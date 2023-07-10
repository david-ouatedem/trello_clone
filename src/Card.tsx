import React from 'react'
import { CardContainer } from './styles'

type CardProps = {
  text: string
}

export function Card({ text }:CardProps) {
  return (
    <div>
      <CardContainer>
        {text}
      </CardContainer>
    </div>
  )
}
