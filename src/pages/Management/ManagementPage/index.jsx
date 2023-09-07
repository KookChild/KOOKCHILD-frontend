import "./style.css";
import React, { useState } from 'react';
export const ManagementPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // 파일이 선택되면 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
  <div id = "management" >
    <div class="childSelect">
      <div className="personContainer">
         <div class="person">사람</div>
        <div className="name">김땡땡</div>
      </div>
      <div className="personContainer">
         <div class="person">사람</div>
        <div className="name">최땡땡</div>
      </div>
      <div className="personContainer">
         <div class="person">사람</div>
        <div className="name">이땡땡</div>
      </div>
      <div className="personContainer">
         <div class="person">사람</div>
        <div className="name">은땡땡</div>
      </div>
    </div>
    <div id="bankContent">
      <div id="pictureSelect">
        <div id = "picture"></div>
      </div>
      <div id="bankInfo">
        <div id="bankForm">
        </div>
      </div>
    </div>
    <div id="sendBtn">
    </div>
  </div>
  )
}
