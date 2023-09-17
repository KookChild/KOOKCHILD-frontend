import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MenuContainer,
  Dropdown,
  HistoryMissionButton,
  MissionHeaderContainer,
} from './style'
import { getMissions, receiveMissionReward } from '@apis'
import { TopContainer, TopNavigationBar } from '@components'
import { MissionList } from './MissionList'
import Swal from 'sweetalert2';

export const MissionChildViewPage = () => {
  const [ongoingMissions, setOngoingMissions] = useState([])
  const [requestMissions, setRequestMissions] = useState([])
  const [receiveReward, setReceiveReward] = useState([])
  const [sort, setSort] = useState('newest')
  const navigate = useNavigate()

  const fetchData = async () => {
    const data = await getMissions(sort);
    setRequestMissions(data.requestMissionLists);
    setOngoingMissions(data.ongoingMissionLists);
    setReceiveReward(data.rewardReceivedLists);
  };

  const handleDropdownChange = e => {
    const selectedValue = e.target.value
    setSort(selectedValue)
  }

  const handleReceiveReward = async (missionId, event) => {
    event.stopPropagation(); // 이벤트 버블링을 막습니다.

    Swal.fire({
      title: '보상금을 받으시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 받겠습니다',
      cancelButtonText: '아니오'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await receiveMissionReward(missionId);
        if (!response.isError) {
          console.log("Reward received successfully!");
          fetchData();
          Swal.fire(
            '성공!',
            '보상금을 받았습니다!',
            'success'
          );
        } else {
          console.error("Error receiving reward:", response.data);
          Swal.fire(
            '오류',
            '보상금을 받는 도중 오류가 발생했습니다.',
            'error'
          );
        }
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [sort]);

  // ...

return (
  <TopContainer>
    <TopNavigationBar title={"미션 목록"} />
    <MenuContainer>
      <h2>미션</h2>
      <HistoryMissionButton onClick={() => navigate('/child/mission/childview/history')}>
        히스토리
      </HistoryMissionButton>
    </MenuContainer>

    <MissionHeaderContainer>보상금 확인하기</MissionHeaderContainer>
    <MissionList
      missions={receiveReward}
      message="아직 보상금 받을 미션이 없습니다."
      onRewardButtonClick={handleReceiveReward}
    />

    <MissionHeaderContainer>입금 대기중인 미션</MissionHeaderContainer>
    <MissionList
      missions={requestMissions}
      message="현재 입금 대기 중인 미션이 없습니다"
    />

    <MenuContainer>
      <MissionHeaderContainer>진행중인 미션</MissionHeaderContainer>
      <Dropdown onChange={handleDropdownChange}>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
      </Dropdown>
    </MenuContainer>
    <MissionList
      missions={ongoingMissions}
      message="현재 진행중인 미션이 없습니다"
    />
  </TopContainer>
);
}