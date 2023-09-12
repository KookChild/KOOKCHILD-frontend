import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BodyContainer, AreaContainer,  ChildInfoContainer, EditButton,   ButtonsContainer } from './style';
//import { BodyContainer, AreaContainer, DeleteMissionButton, ChildInfoContainer, ChildImage, ChildName, MissionDescription, EditButton, SuccessButton, CompleteButton, ButtonsContainer, StyledTitle } from './style';
//import { MissionInfo } from '@components';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MissionInfoContainer, StyledInput, Label } from './style';



export const MissionCreatePage = () => {
    let navigate = useNavigate();
    const now = new Date();
    
    //const todayFormattedDate = `${today.getFullYear()}-${today.getMonth() + 1}- ${today.getDate()}`;

    const [missionData, setMission] = useState({
        //parentChild : 14, // 연결 관계
        title: "",
        content: "",
        reward: "",
        
        image: "",
        startDate: now,
        endDate: "",

        createdDate : now,
        childId : 22,

    });

    let { title, content, reward, endDate } = missionData;

    const onInputChange = (e) => {
        setMission((prevMissionData) => ({
            ...prevMissionData,
            [e.target.name]: e.target.value,
        }));
        //console.log(missionData);
    };

    

    // const [missionData, setMission] = useState({
    //   isParent: true, // 부모가 미션 등록
    //   missionSuccess: false, // 아직 성공 아님
    //   childRequest: false, //자녀가 성공 요청한 것 아님 
    //   title: "",
    //   content: "",
    //   reward: "",
    //   dueDate: "2023-09-07",
    //   childImage: "./abc.png",
    //   childName: "김국민",

    // });

    // const { title, content, amount, dueDate, childImage, childName } = missionData;
    // const onInputChange = (e) => {
    //   setMission(...missionData, { [e.target.name]: e.target.value });

    // }


    const handleCreateMissionClick = () => {

        Swal.fire({
            title: '등록 확인',
            text: "미션을 등록하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '등록',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '동록 완료!',
                    '등록되었습니다.',
                    'success',
                ).then(function () {
                    console.log(missionData);
                    //alert(missionData);
                    onSubmit();


                })
            }
        });
    };


    const onSubmit = async (e) => {
        //e.preventDefault();
        //alert("미션 등록");
        //console.log(missionData.stringify());
        //e.preventDefault();\
        //await axios.post("localhost:3000/mission", missionData); //API url, data
        //여기서 post method실행 

        //e.preventDefault();
        //console.log("before:: "+missionData.endDate);
       // console.log("before:: "+missionData.startDate);
       // console.log(typeof(missionData.endDate));
        console.log(typeof(missionData.childId));
        missionData.endDate = new Date(missionData.endDate);
        missionData.childId = (missionData.childId);
        console.log("after:: "+missionData.childId);
        //console.log("after:: "+missionData.startDate);


        console.log(JSON.stringify(missionData));
        try {
            const response = await fetch('http://localhost:8080/mission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //부모 21 토큰
                    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQ0QGdtYWlsLmNvbSIsImlhdCI6MTY5NDQ4Nzg1MSwiZXhwIjoxNjk3MDc5ODUxfQ.mkdh1M99a9NIHYGZGQtjeNUcCOPZkyx_6B_ShIdMkyw'
                  },
                //body:missionData,
                body: JSON.stringify(missionData)
            });

            if (response.ok) { //axios 면 이게 없어도 된다고? 
                console.log('데이터 전송 성공');
                // 성공한 경우의 처리
            } else {
                console.error('데이터 전송 실패');
                // 실패한 경우의 처리
            }
        }catch (error) {
            console.error('오류 발생:', error);
            // 오류 처리
        }

        navigate('/mission/parentView');
    }

    //    console.log(missionData);

    return (
        <BodyContainer>
            <AreaContainer />

            <AreaContainer><h2>미션 등록하기</h2></AreaContainer>

            <AreaContainer>

                <ChildInfoContainer>
                    <div>
                        {/* <ChildImage src={childImage} alt={childName} />
            <ChildName>{childName}</ChildName> */}
                        <AreaContainer><input type="checkbox"></input></AreaContainer>
                    </div>
                    <div>
                        {/* <ChildImage src={childImage} alt={childName} />
            <ChildName>{childName}</ChildName> */}
                        <AreaContainer><input type="checkbox"></input></AreaContainer>
                    </div>
                </ChildInfoContainer>
            </AreaContainer>

            <AreaContainer />    <div></div>

            <AreaContainer>



                {/* <MissionInfo readOnly={false} isParent={true} /> */}

                {/* <MissionInfo title={title} content={content} amount={amount} dueDate={dueDate} isSuccess={isSuccess} isParent={isParent} completedTime={completedTime} readOnly={false} /> */}



                {/*임의로MissionInfo의 내용 여기에 삽입*/}
                <MissionInfoContainer>

                    <Label>
                        미션 제목
                        <StyledInput
                            name="title"
                            type="text"
                            value={title}
                            onChange={onInputChange}
                            //readOnly={readOnly}
                            placeholder='제목을 입력하세요.' />
                    </Label>

                    <Label>
                        미션 내용
                        <StyledInput
                            name="content"
                            type="text"
                            value={content}
                            onChange={onInputChange}
                            //readOnly={readOnly}
                            //isContent
                            placeholder='내용을 입력하세요.' />
                    </Label>

                    <Label>
                        미션 금액
                        <StyledInput
                            name="reward"
                            type="text"
                            value={reward}
                            onChange={onInputChange}
                            //readOnly={readOnly}
                            placeholder='금액을 입력하세요.' />
                    </Label>

                    <Label>
                        마감 기한
                        <StyledInput
                            name="endDate"
                            type="date"
                            value={endDate}
                            onChange={onInputChange}
                            //readOnly={readOnly} 
                            />
                    </Label>

                    

                </MissionInfoContainer>


















            </AreaContainer>

            <AreaContainer>
                <ButtonsContainer>
                    <AreaContainer><EditButton onClick={handleCreateMissionClick}>미션 등록</EditButton> </AreaContainer>
                </ButtonsContainer>
            </AreaContainer>
        </BodyContainer>
    );
};