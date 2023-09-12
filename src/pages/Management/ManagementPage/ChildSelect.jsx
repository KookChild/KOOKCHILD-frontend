// ChildSelect.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const ChildSelectContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ECECEC;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 0px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
const ChildSelect = ({ handleImageClick, childNamesArray }) => {
  return (
    <ChildSelectContainer>
      {childNamesArray.map((name, index) => (
        <PersonContainer key={index}>
          <ImageContainer>
            <Image
              src={require(`./img/아이${index + 1}.jpg`)} // 이미지 경로를 동적으로 설정
              alt={name}
              onClick={(event) =>{
                handleImageClick(
                  event,
                  `./img/아이${index + 1}.jpg`, // 이미지 경로를 동적으로 설정
                  name
                )
              }
              }
            />
          </ImageContainer>
          <div className="name">{name}</div>
        </PersonContainer>
      ))}
    </ChildSelectContainer>
  );
};

export default ChildSelect;