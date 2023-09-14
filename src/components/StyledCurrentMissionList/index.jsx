import {
  missionListContainer,
  missionInfo,
  missionTitle,
  missionDetail,
  rewardContainer,
  rewardText,
  missionContainer,
  checkClass,
} from './style'
import { useNavigate } from 'react-router-dom'
import { BsCheck } from 'react-icons/bs'

export const StyledCurrentMissionList = ({ missions }) => {
  const navigate = useNavigate()
  return (
    <div style={missionListContainer}>
      {missions.map((mission, index) => (
        <div
          key={index}
          style={missionContainer}
          onClick={() => navigate(`/mission/detail/${mission.id}`)}
        >
          <BsCheck style={checkClass} />
          <div style={missionInfo}>
            <div style={missionTitle}>{mission.title}</div>
            <div style={missionDetail}>{mission.detail}</div>
          </div>
          <div style={rewardContainer}>
            <span style={rewardText}>
              보상금<br></br>
              {`${mission.reward}원`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
