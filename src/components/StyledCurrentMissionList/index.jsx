import {
  missionListContainer,
  missionInfo,
  missionTitle,
  missionDetail,
  rewardContainer,
  rewardText,
  missionContainer,
  checkClass,
  NoMissionsMessage,
} from './style'
import { useNavigate } from 'react-router-dom'
import { BsCheck } from 'react-icons/bs'

export const StyledCurrentMissionList = ({ missions }) => {
  const formatReward = (reward) => {
    const parsedReward = parseInt(reward, 10);
    if (isNaN(parsedReward)) return reward;
    return new Intl.NumberFormat('ko-KR').format(parsedReward);
};
  const navigate = useNavigate()
  return (
    <div style={missionListContainer}>
      {missions.length === 0 ? (
          <NoMissionsMessage>진행중인 미션이 아직 없습니다.</NoMissionsMessage>
        ) 
        : missions.map((mission, index) => (
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
              {`${formatReward(mission.reward)}원`}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
