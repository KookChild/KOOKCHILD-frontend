import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MissionItem, BackHeader } from '@components';
import { BodyContainer, Dropdown, MissionListContainer } from './style';
import { getMissions } from '../../../apis/missions';

export const MissionChildViewPage = () => {
    const [missions, setMissions] = useState([]);
    const [sort, setSort] = useState("newest");
    const navigate = useNavigate(); // <-- 여기에 추가

    const handleMissionClick = (missionId) => {
        navigate(`/mission/detail/${missionId}`); // <-- 여기를 수정
    };
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMissions(sort);
            setMissions(data.missionLists);
        }
        fetchData();
    }, [sort]);

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSort(selectedValue);
    };


    return (
        <div>
            <BodyContainer>
            <BackHeader text="미션 목록" onBackClick={() => navigate('/path-to-go-back')} />
                <Dropdown onChange={handleDropdownChange}>
                    <option value="newest">최신순</option>
                    <option value="oldest">오래된순</option>
                </Dropdown>
                <MissionListContainer>
                {missions.map((mission, index) => (
                    <div onClick={() => handleMissionClick(mission.id)} key={index}>
                <MissionItem
                    isEven={index % 2 === 0}
                    missionTitle={mission.title}
                    missionReward={`${mission.reward}원`}
                    missionDate={mission.deadline !== 'null-null' ? mission.deadline : '기한 없음'}
                    parentConfirm={mission.parentConfirm}
                />
                    </div>
                ))}
            </MissionListContainer>
            </BodyContainer>
        </div>
    );
};
