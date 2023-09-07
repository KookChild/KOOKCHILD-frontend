import "./style.css";
import React, { useState } from 'react';
export const ManagementPage = () => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [childName, setChildName] = useState(""); 

  const handleImageClick = (event) => {
    const clickedImgSrc = event.target.src;
    setSelectedPicture(clickedImgSrc);

     // 클릭된 이미지의 부모 요소를 찾음
    const personContainer = event.target.closest(".personContainer");

    // 부모 요소 내에서 .name 클래스를 가진 요소를 찾음
    const nameElement = personContainer.querySelector(".name");

    if (nameElement) {
       const name = nameElement.textContent;
       setChildName(name);
    }
    console.log(selectedPicture);
  };

  return (
  <div id = "management" >
    <div className="childSelect">
      <div className="personContainer">
        <div className="image-container">
          <img src={require("./img/아이1.jpeg")} alt="김땡땡" onClick={(event) => handleImageClick(event, "./img/아이1.jpeg")}/>
        </div>
        <div className="name">김이산</div>
      </div>
      <div className="personContainer">
        <div className="image-container">
          <img src={require("./img/아이2.jpg")}  alt="최땡땡" onClick={(event) => handleImageClick(event, "./img/아이2.jpg")}/>
        </div>
        <div className="name">이진이</div>
      </div>
      <div className="personContainer">
        <div className="image-container">
          <img src={require("./img/아이3.jpg")}  alt="이땡땡"  onClick={(event) => handleImageClick(event, "./img/아이3.jpg")}/>
        </div>
        <div className="name">김민지</div>
      </div>
      <div className="personContainer">
        <div className="image-container">
          <img src={require("./img/아이4.jpg")}  alt="은땡땡" onClick={(event) => handleImageClick(event, "./img/아이4.jpg")}/>
        </div>
        <div className="name">은지원</div>
      </div>
    </div>


    <div id="bankContent">
      <div id="pictureSelect">
        {selectedPicture == null ? <div id = "comment">송금하실 자녀를 선택해주세요</div> : <img src={selectedPicture} alt="preview-img" className={selectedPicture ? 'show' : ''} />}
      </div>
      <div id="bankInfo">
          {childName == "" ? <p>자녀를 선택해서 송금하세요</p> :
           <p>
          <span id = "name">{childName}</span>
          님의 계좌 <br/>
          계좌번호 : 1223-4422-3433
          </p>
          }
      </div>
    </div>


    
    <div id="sendBtn">
      <button>송금하기</button>
    </div>
    </div>
  )
}
