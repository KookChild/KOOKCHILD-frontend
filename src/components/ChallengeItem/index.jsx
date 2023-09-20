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

export const ChallengeItem = ({ challenge, isParent, parentReward }) => {
  const navigate = useNavigate()
  let daysLeft
  let totalDaysLeft

  const endDate = challenge?.endDate
  const startDate = challenge?.startDate

  const currentDate = new Date()

  if (endDate) {
    daysLeft = getDaysDifference(currentDate, endDate)
    totalDaysLeft = getDaysDifference(startDate, endDate)
  }

  const handleClick = () => {
    if (isParent) {
      navigate(`/challenge/parent/detail/${challenge.id}`)
    } else {
      navigate(`/challenge/child/detail/${challenge.id}`)
    }
  }

  return (
    challenge && (
      <div style={ChallengeContainer} onClick={handleClick}>
        <ChallengeImageProgressContainer>
          <img
            src={challenge?.image}
            alt={challenge?.title}
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
          <div>{challenge?.title}</div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AiFillDollarCircle style={moneyIconBank} />
            {challenge?.bankReward}원
            {parentReward > 0 && (
              <>
                <AiFillDollarCircle style={moneyIconParent} />
                {parentReward}원
              </>
            )}
          </div>
        </ChallengeInfo>
      </div>
    )
  )
}
