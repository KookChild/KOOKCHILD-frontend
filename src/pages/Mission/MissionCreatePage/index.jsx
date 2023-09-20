import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {
    AreaFooterContainer,
    AreaContainer,
    ChildInfoContainer,
    EditButton,
    ButtonsContainer,
    ButtonContainer,
    ChildImage,
    MissionDetail,
    MissionInfoContainer,
    StyledInput,
    ChildContainer,
    RecommendButton,
    LoadingMessage,
    LoadingOverlay
} from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getParentMissionByChild } from '../../../apis/mission/index';
import { getRecommendedMission } from '@apis';
import imgSrc from '../MissionParentViewPage/img/Bear.png'
import { TopContainer, TopNavigationBar } from '@components'

export const MissionCreatePage = () => {
    let navigate = useNavigate();
    const now = new Date();
    const [childs, setChilds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchRecommendedMission = async () => {
        try {
            setIsLoading(true);
            const data = await getRecommendedMission();
            setMission(prev => ({
                ...prev,
                title: data.missionTitle,
                content: data.missionContent
            }));
        } catch (error) {
            console.error("Error fetching recommended mission:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("before childs :: ", childs);
                const response = await getParentMissionByChild(0);

                try {
                    setChilds(response.childLists);
                    console.log(response.childLists);
                } catch (error) {
                    console.log(error);
                }
                console.log("after childs :: ", childs);

            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    const [missionData, setMission] = useState({

        title: "",
        content: "",
        reward: "",

        image: "",
        startDate: now,
        endDate: "",

        createdDate: now,
        childIds: "",

    });

    let { title, content, reward, endDate } = missionData;

    const onInputChange = (e) => {
        setMission((prevMissionData) => ({
            ...prevMissionData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCreateMissionClick = () => {
        if (selectedIds.length === 0) {
            Swal.fire({
                title: '<span style="font-size: 20px;">자녀를 선택해주세요!</span>',
                icon: 'error',
                confirmButtonText: '확인',
                customClass: {
                    // 모달에 사용할 클래스 추가
                    container: 'custom-swal-container',
                  },
            });
            return;
        }
        Swal.fire({
            title: '<span style="font-size: 20px;">미션을 등록하시겠습니까?</span>',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#D9D9D9',
            confirmButtonText: '등록',
            cancelButtonText: '취소',
            reverseButtons: true,
            customClass: {
                container: 'custom-swal-container',
              },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '<span style="font-size: 20px;">등록 완료!</span>',
                    icon: 'success',
                    customClass: {
                        container: 'custom-swal-container',
                      },
                }).then(function () {
                    console.log(missionData);
                    onSubmit();
                })
            }
        });
    };

    const onSubmit = async (e) => {
        missionData.childIds = selectedIds.join(',');
        missionData.endDate = new Date(missionData.endDate);
        console.log(JSON.stringify(missionData));
        axios.post('http://localhost:8080/mission', missionData)
            .then((response) => {
                console.log('서버 응답:', response.data);
                navigate('/mission/parentView'); // 여기로 이동
            })
            .catch((error) => {
                console.log('서버 오류', error);
            });
    };

    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleSubmit = async () => {
        console.log(selectedIds.join(','));
        console.log(typeof (selectedIds.join(',')));
        console.log("28 + ", childs);

    }


    return (
        <TopContainer>
            <TopNavigationBar title={'미션 등록'} />
            <AreaContainer>
                <ChildInfoContainer>
                    {childs.map((child) => (
                        <ChildContainer key={child.childId}>
                            <ChildImage src={imgSrc} alt={child.childName} />
                            <h4>{child.childName}</h4>
                            <input
                                type="checkbox"
                                checked={child.checked}
                                onChange={() => handleCheckboxChange(child.childId)}
                            />
                        </ChildContainer>
                    ))}
                </ChildInfoContainer>
            </AreaContainer>
            <ButtonContainer>
                <RecommendButton onClick={fetchRecommendedMission}>미션 추천</RecommendButton>
            </ButtonContainer>

            <AreaContainer>
                <MissionInfoContainer>
                    <MissionDetail>
                        미션 제목
                        <StyledInput
                            name="title"
                            type="text"
                            value={title}
                            onChange={onInputChange}
                            placeholder='제목을 입력하세요.' />
                    </MissionDetail>

                    <MissionDetail>
                        미션 내용
                        <StyledInput
                            name="content"
                            type="text"
                            value={content}
                            onChange={onInputChange}
                            placeholder='내용을 입력하세요.' />
                    </MissionDetail>

                    <MissionDetail>
                        미션 금액
                        <StyledInput
                            name="reward"
                            type="text"
                            value={reward}
                            onChange={onInputChange}
                            placeholder='금액을 입력하세요.' />
                    </MissionDetail>

                    <MissionDetail>
                        마감 기한
                        <StyledInput
                            name="endDate"
                            type="date"
                            value={endDate}
                            onChange={onInputChange}
                        />
                    </MissionDetail>
                </MissionInfoContainer>
            </AreaContainer>
            <AreaFooterContainer>
                    <EditButton onClick={handleCreateMissionClick}>미션 등록</EditButton>
            </AreaFooterContainer>
            {isLoading && (
                <LoadingOverlay>
                    <LoadingMessage>
                        추천 미션을 가져오는 중입니다
                    </LoadingMessage>
                </LoadingOverlay>
            )}
        </TopContainer>
    );
}
