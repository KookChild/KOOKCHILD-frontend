import React from 'react'
import {
  ChallengeContainer,
  ChallengeImageProgressContainer,
  ChallengeProgress,
  ChallengeInfo,
  moneyIcon,
} from './style' // style.js에서 스타일을 가져옵니다.
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PRIMARY } from '@utility/COLORS'
import { useEffect, useState } from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { checkChallengeIsProceedingAPI } from '@apis'
export const ChallengeItem = ({ challenge, isParent }) => {
  const [challengeType, setChallengeType] = useState()
  const params = useParams()
  const navigate = useNavigate()
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
          {/* <span>{`${progress}%`}</span> */}
          <span>50%</span>
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
                // width: `${progress}%`,
                width: '50%',
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
          <AiFillDollarCircle style={moneyIcon} />
          {isParent ? challenge.challenge.bankReward : challenge.bankReward}원
        </div>
      </ChallengeInfo>
    </div>
  )
}
