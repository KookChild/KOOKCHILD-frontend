import { FilterButton } from '@components'
import {
  FilterContainer,
  HeaderContainer,
  ChallengeListContainer
} from './style'
import { useEffect, useState } from 'react'
import { ChallengeItem } from '@components'
import { ChallengeContainer } from './style'
import {
  loadAllChallengesAPI,
  loadParentChallengesAPI,
  loadMyChallengesAPI,
} from '@apis'

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
          apiFunction = loadParentChallengesAPI
          break
        case 2:
          apiFunction = loadMyChallengesAPI
          break
        default:
          apiFunction = loadAllChallengesAPI
          break
      }

      try {
        const challengesData = await apiFunction()
        console.log(challengesData)
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
      <HeaderContainer>챌린지</HeaderContainer>
      <FilterContainer>
        <FilterButton
          text={'전체'}
          isSelected={selectedIndex === 0}
          onClick={() => handleButtonClick(0)}
        />
        <FilterButton
          text={'부모님 추천'}
          isSelected={selectedIndex === 1}
          onClick={() => handleButtonClick(1)}
        />
        <FilterButton
          text={'진행중'}
          isSelected={selectedIndex === 2}
          onClick={() => handleButtonClick(2)}
        />
      </FilterContainer>
      <ChallengeListContainer>
        {challenges.map((challenge, key) => (
          <ChallengeItem
            key={key}
            challenge={challenge}
          />
        ))}
      </ChallengeListContainer>

    </ChallengeContainer>
  )
}
