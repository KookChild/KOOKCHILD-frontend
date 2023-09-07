import React from 'react';
import { MissionItem } from '@components';
import { BodyContainer, Dropdown, MissionListContainer } from './style';

export const MissionChildViewPage = () => {
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
};

    const missions = [
        { missionTitle: 'Mission 1', missionReward: '40000원', missionDate: '2023년 9월 6일 23:00', parentConfirm: true},
        { missionTitle: 'Mission 2', missionReward: '40000원', missionDate: '2023년 9월 6일 23:00', parentConfirm: false},
        { missionTitle: 'Mission 3', missionReward: '40000원', missionDate: '2023년 9월 6일 23:00', parentConfirm: false},
        { missionTitle: 'Mission 4', missionReward: '40000원', missionDate: '2023년 9월 6일 23:00', parentConfirm: true},
        { missionTitle: 'Mission 5', missionReward: '40000원', missionDate: '2023년 9월 6일 23:00', parentConfirm: false},
    ];

    return (
      <div>
          <BodyContainer>
              <Dropdown onChange={handleDropdownChange}>
                  <option value="newest">날짜순</option>
                  <option value="oldest">오래된순</option>
              </Dropdown>
              <MissionListContainer>
                  {missions.map((mission, index) => (
                      <MissionItem key={index} missionTitle={mission.missionTitle} missionReward={mission.missionReward} missionDate={mission.missionDate} parentConfirm={mission.parentConfirm} />
                  ))}
              </MissionListContainer>
          </BodyContainer>
      </div>
  );
};
