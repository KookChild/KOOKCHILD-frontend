import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BodyContainer, AreaContainer, DeleteMissionButton, ChildInfoContainer, ChildImage, ChildName, MissionDescription, EditButton, SuccessButton, CompleteButton, ButtonsContainer, StyledTitle } from './style';
import { MissionInfo } from '@components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const MissionCreatePage = () => {
  let navigate = useNavigate();



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
          onSubmit();


        })
      }
    });
  };


  const onSubmit = async (e) => {
    alert("sbumnit");
    //console.log(missionData.stringify());
    //e.preventDefault();\
    //await axios.post("localhost:3000/mission", missionData); //API url, data
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
        <MissionInfo  readOnly={false} isParent={true}/>
    
        {/* <MissionInfo title={title} content={content} amount={amount} dueDate={dueDate} isSuccess={isSuccess} isParent={isParent} completedTime={completedTime} readOnly={false} /> */}
          
      </AreaContainer>

      <AreaContainer>
        <ButtonsContainer>
          <AreaContainer><EditButton onClick={handleCreateMissionClick}>미션 등록</EditButton> </AreaContainer>
        </ButtonsContainer>
      </AreaContainer>
    </BodyContainer>
  );
};