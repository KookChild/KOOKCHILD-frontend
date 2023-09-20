
import { BodyContainer ,containerStyle} from './style';
import React, { useState } from 'react';

import React from 'react';
import Swal from 'sweetalert2';
import { BodyContainer, AreaContainer, DeleteMissionButton, ChildInfoContainer, ChildImage, ChildName, MissionDescription, EditButton, SuccessButton, CompleteButton, ButtonsContainer, StyledTitle } from './style';


const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        체크박스 레이블
      </label>
      
      <p>체크박스 상태: {isChecked ? '체크됨' : '체크 안 됨'}</p>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        체크박스 레이블
      </label>
      <p>체크박스 상태: {isChecked ? '체크됨' : '체크 안 됨'}</p>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        체크박스 레이블
      </label> <p>체크박스 상태: {isChecked ? '체크됨' : '체크 안 됨'}</p>
    </div>
  );
};

//export default CheckboxExample;

const CheckboxGroup = () => {
  const [checkboxes, setCheckboxes] = useState([ // id는 자녀의 id 
    { id: 1, label: '윤다인', checked: false },
    { id: 2, label: '최유정', checked: false },
    { id: 3, label: '김지은', checked: false },
    // 추가적인 체크박스 옵션을 여기에 추가하세요
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      {checkboxes.map((checkbox, index) => (
        <label key={checkbox.id} style={{ alignItems: 'center', marginLeft: '20px', marginRight: '20px', marginBottom: '10px', fontSize: '20px' }}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {checkbox.label}
        </label>
      ))}
    </div>
  );
};

const MissionCreate = () => {
 

  const Inputs = () =>{
    return (
      <div style={{ display: 'flex' }}>
      미션 제목 <input type='text' size='10' />
      미션 내용 <input type='text'  size='10'/>
      미션 금액 <input type='number'  size='10'/>
      마감기한 <input type='date' size='10'/>
      
    </div>

    )
  }

  return (
    <div >
      <h1>missionCreate</h1>
      <br></br>
      <Inputs />

      <hr></hr>
      <br></br>
      <button style={{width:'200px', height:'50px'}}><h2 style={{ fontSize: "30px" }}>미션등록</h2></button>


    </div>

  );
};

export const MissionCreatePage = () => {
  return (



    <div style={containerStyle}>
      <div >
        <h1 style={{ fontSize: "30px" }}>Mission Create Page</h1>

      </div>
      <hr></hr>
      <div> <CheckboxExample /></div>
      <hr></hr>
      <div><CheckboxGroup /></div>

      <br></br>

      <hr></hr>


      <div><MissionCreate /></div>
      

    </div>



  )


}
