import React from 'react'
import {
  ChallengeContainer,
  ChallengeImageProgressContainer,
  ChallengeProgress,
  ChallengeInfo,
} from './style' // style.js에서 스타일을 가져옵니다.
import { useNavigate } from 'react-router-dom'
export const ChallengeItem = ({ challenge }) => {
  const { id, title, imageURL, progress } = challenge
  const navigate = useNavigate()
  return (
    <div
      style={ChallengeContainer}
      onClick={() => {
        navigate(`/challenge/child/detail/${id}`)
      }}
    >
      <ChallengeImageProgressContainer>
        <img
          src={imageURL ? imageURL : '/img/Sample_challenge.jpg'}
          alt={title}
          style={{ width: '100%', height: '200px', borderRadius: '8px' }}
        />
        <div style={ChallengeProgress}>
          <span>{`${progress}%`}</span>
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
                width: `${progress}%`,
                height: '100%',
                backgroundColor: 'lightyellow',
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
