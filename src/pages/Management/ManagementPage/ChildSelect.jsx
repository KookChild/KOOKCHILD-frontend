// ChildSelect.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const ChildSelectContainer = styled.div`
width : 349px;
  height: 100px;
  display: flex;
  justify-content:  flex-start;
  align-items: flex-start;
  padding: 10px 0px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding : 0px 5px;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const NameDiv = styled.div`
  padding: 5px 0px; /* 아주 작은 padding 값을 적용 */
  /* 다른 스타일을 여기에 추가할 수 있습니다. */
`;
const ChildSelect = ({ handleImageClick, childNamesArray }) => {
  return (
    <ChildSelectContainer>
      {childNamesArray.map((name, index) => (
        <PersonContainer key={index}>
          <ImageContainer>
            <Image
              src={require(`./img/아이${index + 1}.jpg`)} // 이미지 경로를 동적으로 설정
              alt='아이사진'
              onClick={(event) =>{
                handleImageClick(
                  event,
                  `./img/아이${index + 1}.jpg`, // 이미지 경로를 동적으로 설정
                  index
                )
              }
              }
            />
          </ImageContainer>
          <NameDiv className="name">{name}</NameDiv>
        </PersonContainer>
      ))}
    </ChildSelectContainer>
  );
};

export default ChildSelect;