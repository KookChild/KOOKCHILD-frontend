import React from 'react'
import {
  ChallengeContainer,
  ChallengeImageProgressContainer,
  ChallengeProgress,
  ChallengeInfo,
} from './style' // style.js에서 스타일을 가져옵니다.
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PRIMARY } from '@utility/COLORS'
import { useEffect, useState } from 'react'
import { checkChallengeIsProceedingAPI } from '@apis'
export const ChallengeItem = ({ challenge }) => {
  const [challengeType, setChallengeType] = useState()
  const { id, title, image } = challenge
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const challengeTypeData = await checkChallengeIsProceedingAPI(params.id)
        setChallengeType(challengeTypeData)
        console.log(challengeTypeData)
      } catch (error) {
        console.error('Error fetching challenge detail:', error)
      }
    }

    fetchData()
  }, [params.id])
  return (
    <div
      style={ChallengeContainer}
      onClick={() => {
        navigate(`/challenge/child/detail/${id}`)
      }}
    >
      <ChallengeImageProgressContainer>
        <img
          src={image ? image : '/img/Sample_challenge.jpg'}
          alt={title}
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
        <div style={{ flex: 1, textAlign: 'left', fontSize: '16px' }}>
          {title}
        </div>
        <div style={{ flex: 1, textAlign: 'right', fontSize: '16px' }}>
          완료 보상금: 5000원
        </div>
      </ChallengeInfo>
    </div>
  )
}
