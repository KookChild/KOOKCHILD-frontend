import { FilterButton } from '@components'
import {
  FilterContainer,
  HeaderContainer,
  TotalCountContainer,
  TotalCountTextContainer,
} from './style'
import { useEffect, useState } from 'react'
import { SlideLogo, ChallengeCard } from '@components'
import { ChallengeContainer } from './style'

export const ChallengeViewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const handleButtonClick = index => {
    setSelectedIndex(index)
  }

  return (
    <ChallengeContainer>
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
      <TotalCountContainer>
        총 <TotalCountTextContainer>{totalCount}</TotalCountTextContainer> 건
      </TotalCountContainer>
      <ChallengeCard
        imgSource={'/img/Challenge1.png'}
        startDate={'2023.09.07'}
        endDate={'2023.09.14'}
      />
      <ChallengeCard
        imgSource={'/img/Challenge1.png'}
        startDate={'2023.09.07'}
        endDate={'2023.09.14'}
      />
      <ChallengeCard
        imgSource={'/img/Challenge1.png'}
        startDate={'2023.09.07'}
        endDate={'2023.09.14'}
      />
    </ChallengeContainer>
  )
}
