import { useNavigate } from 'react-router-dom'
import './style.css'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChildSelect from './ChildSelect'
import BankContent from './BankContent'
import axios from 'axios'
import c1 from './img/아이1.jpg'
import c2 from './img/아이2.jpg'
import c3 from './img/아이3.jpg'
import c4 from './img/아이4.jpg'
import { TopContainer } from '../../../components/TopContainer'
import { TopNavigationBar } from '../../../components/topNavigationBar'

if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}
// if (localStorage.getItem('token')) {
//   token = `Bearer ${localStorage.getItem('token')}`;
// }

// 화면을 중앙 정렬하는 스타일 컴포넌트
const CenteredContainer = styled.div`
  width: 100%; /* 가로 크기 */
  height: 100%; /* 세로 크기 */
  box-sizing: border-box;
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  border: 1px solid #ccc; /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */
`


const MainContent = styled.div`
  flex-grow: 1;
`

const Footer = styled.div`
  text-align: center;
`

export const ManagementPage = () => {
  const [selectedPicture, setSelectedPicture] = useState(c1)
  const [childName, setChildName] = useState('자녀8')
  const [disabled, setDisabled] = useState(true)
  const [accountNum, setAccountNum] = useState('')
  const [childId, setChildId] = useState(22)
  const [childNamesArray, setChildNamesArray] = useState([]) // 배열 상태로 변경
  const [amount, setAmout] = useState(0)
  const [notIntAmount, setNotInAmount] = useState(0)

  const personContainerRef = useRef(null) // ref 생성

  const handleImageClick = (event, imagePath, altText) => {
    const clickedImgSrc = imagePath
    console.log(imagePath);
    if (imagePath === "./img/아이1.jpg") {
      setSelectedPicture(c1);
      setChildId(22);
    } else if (imagePath === "./img/아이2.jpg") {
      setSelectedPicture(c2);
      setChildId(24);
    } else if (imagePath === "./img/아이3.jpg") {
      setSelectedPicture(c3);
      setChildId(26);
    } 
    setChildName(altText);

    if (disabled == true) {
      setDisabled(false)
    }

    console.log(selectedPicture)
    console.log(altText)
  }

  useEffect(() => {
    var url2 = '/management/childName'

    axios({
      url: url2,
      method: 'get'
    })
    .then((response) => { // axios then 호출
      if(response.data){
        const ids = response.data.map((child) => child.name);
        setChildNamesArray(ids); 

      }
    })
    .catch((error) => {
      console.error('API 요청 실패:', error);
      // 실패한 경우 에러 처리
      // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
    })
    .finally(() => {
    });
  }, []);

  useEffect(() => {
    var url = '/management/' + childId

    axios({
      url: url,
      method: 'get'
    })
      .then(response => {
        // axios then 호출
        if (response.data) {
          console.log('아이 정보 확인')
          setAccountNum(response.data.accountNum)
          setAmout(response.data.amount)
          setNotInAmount(response.data.notInAmount)
        }
      })
      .catch(error => {
        console.error('API 요청 실패:', error)
        // 실패한 경우 에러 처리
        // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
      })
      .finally(() => {})
  }, [childId])

  const navigate = useNavigate();

  const handleHeaderImageClick = () => {
    navigate(-1); // 이전 화면으로 이동
  }


  return (
    <TopContainer>
      <TopNavigationBar title = {"자녀소비통계"}/>

      <MainContent>
        <ChildSelect
          handleImageClick={handleImageClick}
          childNamesArray={childNamesArray}
        />
        <BankContent
          selectedPicture={selectedPicture}
          disabled={disabled}
          setDisabled={setDisabled}
          childName={childName}
          childId={childId}
          accountNum={accountNum}
          amount={amount}
          notInAmount={notIntAmount}
        />
      </MainContent>

      <Footer></Footer>
    </TopContainer>
  )
}
