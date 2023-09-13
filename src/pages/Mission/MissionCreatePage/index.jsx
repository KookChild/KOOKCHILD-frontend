import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { BodyContainer, AreaContainer, ChildInfoContainer, EditButton, ButtonsContainer,ChildImage } from './style';
//import { BodyContainer, AreaContainer, DeleteMissionButton, ChildInfoContainer, ChildImage, ChildName, MissionDescription, EditButton, SuccessButton, CompleteButton, ButtonsContainer, StyledTitle } from './style';
//import { MissionInfo } from '@components';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MissionInfoContainer, StyledInput, Label } from './style';
import axios from 'axios';
import { getParentMissionByChild } from '../../../apis/mission/index';
import imgSrc from '../MissionParentViewPage/img/Bear.png'

export const MissionCreatePage = () => {
    let navigate = useNavigate();
    const now = new Date(); // 오늘 날짜
    const [childs, setChilds] = useState([]); // 아이들 리스트
    //const [selectedChildIndex, setSelectedChildIndex] = useState(0);

    useEffect(() => {
        // 초기 로드 API 호출
        const fetchData = async () => {
            try {
                //console.log(selectedChildIndex);//선택한 아이 id 
                //console.log(missions);
                //console.log("24 + " , childs); // 한명의 부모에 딸린 아이들 id랑 이름
                console.log("before childs :: " , childs);
                const response = await getParentMissionByChild(0); // api로 정보 불러옴.0 이면 모든 자녀들의 missionList
               
                    
                //setMissions(response.missionLists);
                try{
                    setChilds(response.childLists); // 값을 할당한다
                console.log(response.childLists);
                }catch(error){
                    console.log(error);
                }
                
               
                console.log("after childs :: " , childs); // childId 와 childName 의 매핑이 childs에 들어가 있음


            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();
        //console.log("after childs :: " , childs);
    }, []);

    /*return 을 위한 정보들*/
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

    /*미션 내용 변경하기*/
    const onInputChange = (e) => {
        setMission((prevMissionData) => ({
            ...prevMissionData,
            [e.target.name]: e.target.value,
        }));
    };

    /*
    const CheckboxGroup = () => {
        const [checkboxes, setCheckboxes] = useState([ // id는 자녀의 id 
            { id: 1, label: '윤다인', checked: false },
            { id: 2, label: '최유정', checked: false },
            { id: 3, label: '김지은', checked: false },
            // 추가적인 체크박스 옵션을 여기에 추가하세요
        ]);

        // const [checkboxes, setCheckboxes] = useState(checkboxesData); // 유동적인 checkboxesData
        // const checkboxesData = {[
        //     {"id" : 14},
        // ]};

        const handleCheckboxChange = (id) => {
            setCheckboxes((prevCheckboxes) =>
                prevCheckboxes.map((checkbox) =>
                    checkbox.id === id
                        ? { ...checkbox, checked: !checkbox.checked }
                        : checkbox
                )
            )

        };

    };*/


    /*미션 등록하는 버튼*/
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
                    '등록 완료!',
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


        /*
        const selectedOptionsString = selectedOptions.join(','); // id를 , 로 join 하여 string 형태로
        missionData.childIds = selectedOptions.join(',');
        */
       missionData.childIds=selectedIds.join(',');

        missionData.endDate = new Date(missionData.endDate);

        console.log(JSON.stringify(missionData));


        axios.post('http://localhost:8080/mission', missionData)
            .then((response) => { console.log('서버 응답:', response.data); })
            .catch((error) => { console.log('서버 오류', error); });

        /*
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
        }*/
                    
        navigate('/mission/parentView');
    };

    /************************************************************************ */


    //선택된 id 들을저장하는 배열
    const [selectedIds, setSelectedIds] = useState([]);

    const handleCheckboxChange = (id) => {
        // 선택된 체크박스의 ID를 토글합니다.
        if (selectedIds.includes(id)) {
          setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
          setSelectedIds([...selectedIds, id]);
        }
    };
      
    const handleSubmit = async () => {
        console.log(selectedIds.join(','));
        console.log(typeof(selectedIds.join(',')));
        console.log("28 + " , childs);
        
    }


    return (
        <BodyContainer>
            <AreaContainer />

            <AreaContainer><h2>미션 등록하기</h2></AreaContainer>

            <AreaContainer>
            <ChildInfoContainer>
                {childs.map((child) => (
                    <label key={child.childId}>
                        <h2>{child.childName}</h2>
                        <ChildImage src={imgSrc} alt={child.childName} />
                    <input
                        // style={{
                        //   opacity: 0,         // 투명하게 설정
                        //   position: 'absolute', // 화면에서 위치 이동
                        //   left: '-9999px',     // 화면 왼쪽 밖으로 이동
                        // }}
                        type="checkbox"
                        //key = {child.id}
                        checked= {child.checked}//{selectedIds.includes(child.id)}
                        onChange={() => handleCheckboxChange(child.childId)} // 사진 약간 흐리게 하든지 앞에 체크 표시 하든지?
                    />
                    
                    </label>
                ))}
                {/* <button onClick={handleSubmit}>선택된 아이디 전송</button> */}
            </ChildInfoContainer>
                


                {/* <ChildInfoContainer>
                    <div >
                        <ChildImage src={childImage} alt={childName} />
                        <ChildName>{childName}</ChildName>
                        <AreaContainer>
                        <input 
                        type="checkbox" 
                        // value={childLists.id} 
                        // checked={checkbox.checked}
                        //onChange={() => handleCheckboxChange(checkbox.id)}
                        ></input></AreaContainer>
                    </div>
                    <div>
                        <ChildImage src={childImage} alt={childName} />
                        <ChildName>{childName}</ChildName>
                        <AreaContainer><input type="checkbox"></input></AreaContainer>
                    </div>
                </ChildInfoContainer> */}




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
}
