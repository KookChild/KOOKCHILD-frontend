// ChildSelect.js
import React from 'react';
import { 
  ChildSelectContainer, 
  Image, 
  ImageContainer, 
  NameDiv, 
  PersonContainer 
} from './style';

const ChildSelect = ({ handleImageClick, childNamesArray }) => {
  return (
    <ChildSelectContainer>
      {childNamesArray.map((name, index) => (
        <PersonContainer key={index}>
          <ImageContainer>
            <Image
              src={require(`../../../img/아이${index + 1}.jpg`)} // 이미지 경로를 동적으로 설정
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