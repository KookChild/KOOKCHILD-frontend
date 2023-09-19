import React from 'react'
import {
  ChallengeContainer,
  ChallengeImageProgressContainer,
  ChallengeProgress,
  ChallengeInfo,
  moneyIconBank,
  moneyIconParent,
} from './style'
import { useNavigate } from 'react-router-dom'
import { PRIMARY } from '@utility/COLORS'
import { AiFillDollarCircle } from 'react-icons/ai'
import { getDaysDifference } from '@utility/COMMON_FUNCTION'

export const ChallengeItem = ({ challenge, isParent }) => {
  const navigate = useNavigate()

  const endDate = isParent
    ? new Date(challenge.challenge.endDate)
    : new Date(challenge.endDate)
  const startDate = isParent
    ? new Date(challenge.challenge.startDate)
    : new Date(challenge.startDate)
  const currentDate = new Date()

  const daysLeft = getDaysDifference(currentDate, endDate)
  const totalDaysLeft = getDaysDifference(startDate, endDate)

  const handleClick = () => {
    if (isParent) {
      navigate(`/challenge/parent/detail/${challenge.challenge.id}`)
    } else {
      navigate(`/challenge/child/detail/${challenge.id}`)
    }
  }

  return (
    <div style={ChallengeContainer} onClick={handleClick}>
      <ChallengeImageProgressContainer>
        <img
          src={isParent ? challenge.challenge.image : challenge.image}
          alt={isParent ? challenge.challenge.title : challenge.title}
          style={{ width: '100%', height: '200px', borderRadius: '8px' }}
        />
        <div style={ChallengeProgress}>
          <span>D-{daysLeft}</span>
          <div
            style={{
              width: '100px',
              height: '10px',
              backgroundColor: '#ccc',
              marginLeft: '10px',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                width: `${(daysLeft / totalDaysLeft) * 100}%`,

                height: '100%',
                backgroundColor: PRIMARY,
              }}
            ></div>
          </div>
        </div>
      </ChallengeImageProgressContainer>
      <ChallengeInfo>
        <div>{isParent ? challenge.challenge.title : challenge.title}</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AiFillDollarCircle style={moneyIconBank} />
          {isParent ? challenge.challenge.bankReward : challenge.bankReward}원
          {challenge.parentReward > 0 && (
            <>
              <AiFillDollarCircle style={moneyIconParent} />
              {challenge.parentReward}원
            </>
          )}
        </div>
      </ChallengeInfo>
    </div>
  )
}
