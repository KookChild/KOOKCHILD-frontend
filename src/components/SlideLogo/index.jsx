import React from 'react'
import { MediaQueryStyles, SlideDown, SlideUp, SlideWrapper } from './style' // Adjust the import path

export const SlideLogo = () => {
  return (
    <MediaQueryStyles>
      <SlideWrapper>
        <SlideUp>KOOK</SlideUp>
        <SlideDown>CHILD</SlideDown>
      </SlideWrapper>
    </MediaQueryStyles>
  )
}
