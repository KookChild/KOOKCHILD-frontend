import { useNavigate } from 'react-router-dom'
import {
    MissionItemContainer,
    MissionListContainer,
    MessageContainer,
  } from './style'
import { MissionItem } from '@components'

export const MissionList = ({ missions, message, onRewardButtonClick }) => {
    const navigate = useNavigate()

    const handleMissionClick = missionId => {
        navigate(`/mission/detail/${missionId}`)
      }

    return (
      <MissionListContainer>
        {missions.length > 0 ? (
          missions.map((mission, index) => (
            <MissionItemContainer
              even={0}
              onClick={() => handleMissionClick(mission.id)}
              key={index}
            >
              <MissionItem
                even={0}
                missionTitle={mission.title}
                missionReward={`${mission.reward}원`}
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