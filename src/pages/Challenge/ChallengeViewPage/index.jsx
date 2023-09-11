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
import { testAPI, loadAllChallengesAPI } from '@apis'

export const ChallengeViewPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [challenges, setChallenges] = useState([])
  const handleButtonClick = index => {
    setSelectedIndex(index)
  }

  useEffect(() => {
    const loadChallenges = async () => {
      let apiFunction
      switch (selectedIndex) {
        case 0:
          apiFunction = loadAllChallengesAPI
          break
        case 1:
          // apiFunction = loadParentChallengesAPI
          apiFunction = loadAllChallengesAPI
          break
        case 2:
          // apiFunction = loadMyChallengesAPI
          apiFunction = loadAllChallengesAPI
          break
        default:
          apiFunction = loadAllChallengesAPI
          break
      }

      try {
        const challengesData = await apiFunction()
        setChallenges(challengesData)
        setTotalCount(challengesData.length)
      } catch (error) {
        console.error('Error loading challenges:', error)
      }
    }

    loadChallenges()
  }, [selectedIndex])
  return (
    <ChallengeContainer>
      <h1>
        {challenges.map((challenge, key) => (
          <h4 key={key}>{challenge.title}</h4>
        ))}
      </h1>
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

      <div>
        <TotalCountContainer>
          총<TotalCountTextContainer>{totalCount}</TotalCountTextContainer> 건
        </TotalCountContainer>
        {challenges.map((challenge, key) => (
          <ChallengeCard
            key={key}
            imgSource={challenge.imgSource}
            startDate={challenge.startDate}
            endDate={challenge.endDate}
          />
        ))}
      </div>
    </ChallengeContainer>
  )
}
