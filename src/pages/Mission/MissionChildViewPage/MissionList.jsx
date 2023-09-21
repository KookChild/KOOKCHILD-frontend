import { useNavigate } from 'react-router-dom'
import {
  MissionItemContainer,
  MissionListContainer,
  MessageContainer,
} from './style'
import { MissionItem } from '@components'

export const MissionList = ({ missions, message, onRewardButtonClick }) => {
  const navigate = useNavigate()

  const handleMissionClick = (missionId, index) => {
    navigate(`/mission/detail/${missionId}/${index}`)
  }

  return (
    <MissionListContainer>
      {missions.length > 0 ? (
        missions.map((mission, index) => (
          <MissionItemContainer
            even={1}
            onClick={() => handleMissionClick(mission.id, 1)}
            key={index}
          >
            <MissionItem
              even={1}
              missionTitle={mission.title}
              missionReward={mission.reward}
              missionDate={mission.deadline}
              parentConfirm={mission.parentConfirm}
              childConfirm={mission.childConfirm}
              showRewardButton={!!onRewardButtonClick}
              onRewardButtonClick={event => {
                onRewardButtonClick && onRewardButtonClick(mission.id, event);
              }}
            />
          </MissionItemContainer>
        ))
      ) : (
        <MessageContainer>{message}</MessageContainer>
      )}
    </MissionListContainer>
  );
};