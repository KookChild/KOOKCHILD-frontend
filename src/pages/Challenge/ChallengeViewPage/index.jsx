import { FilterButton } from '@components'
import { FilterContainer, HeaderContainer } from './style'
import { useState } from 'react'
import { SlideLogo } from '@components'
export const ChallengeViewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleButtonClick = index => {
    setSelectedIndex(index)
  }
  return (
    <div>
      <SlideLogo />
      <HeaderContainer>Challenge 목록</HeaderContainer>
      <FilterContainer>
        <FilterButton
          text={'All'}
          isSelected={selectedIndex === 0}
          onClick={() => handleButtonClick(0)}
        />
        <FilterButton
          text={'Parents'}
          isSelected={selectedIndex === 1}
          onClick={() => handleButtonClick(1)}
        />
        <FilterButton
          text={'Me'}
          isSelected={selectedIndex === 2}
          onClick={() => handleButtonClick(2)}
        />
      </FilterContainer>
    </div>
  )
}
