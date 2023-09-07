// BankContent.js
import React from 'react';
import styled from 'styled-components';
import c1 from './img/아이1.jpeg';
import c2 from './img/아이2.jpg';
import c3 from './img/아이3.jpg';
import c4 from './img/아이4.jpg';


import './style.css';
const BankContentContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 20px 0px;
  padding: 0; /* 여기를 0으로 변경 */
`;

const PictureSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;
`;

const BankInfoContainer = styled.div`
  padding: 10px 0;
  background-color: #ECECEC;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const BankInfoText = styled.p`
  padding: 10px 0px;
`;

const CommentText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;



const BankContent = ({ selectedPicture, childName }) => {
  console.log(selectedPicture);
  console.log(childName);
  if(selectedPicture == "./img/아이1.jpeg"){
    selectedPicture = c1;
  }else if(selectedPicture == "./img/아이2.jpg"){
    selectedPicture = c2;
  }else if(selectedPicture == "./img/아이3.jpg"){
    selectedPicture = c3;
  }else if(selectedPicture == "./img/아이4.jpg"){
    selectedPicture = c4;
  }


  const PreviewImage = styled.img.attrs(props => ({
    style: {
      display: props.selectedpicture != null ? 'block' : 'none',
    },
  }))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${selectedPicture});
  `;

  return (
    <BankContentContainer>
      <PictureSelectContainer>
        {selectedPicture == null ? (
          <div id="comment">송금하실 자녀를 선택해주세요</div>
        ) : (
          <PreviewImage
            selectedpicture={selectedPicture}
            src={selectedPicture}
            alt="preview-img"
            className="show"
          />
        )}
      </PictureSelectContainer>
      <BankInfoContainer>
        {childName === "" ? (
          <p>자녀를 선택해서 송금하세요</p>
        ) : (
          <p>
            <span id="name">{childName}</span>
            님의 계좌 <br/>
            계좌번호 : 1223-4422-3433
          </p>
        )}
      </BankInfoContainer>
    </BankContentContainer>
  );
}

export default BankContent;
