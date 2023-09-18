import React, { useState } from 'react';
import { TopContainer, TopNavigationBar } from '@components';
import { useNavigate } from 'react-router-dom';
import {
  RegisterWrapper,
  RegisterTitle,
  RegisterForm,
  RadioGroup,
  Label,
  Input,
  CheckboxGroup,
  RadioLabelWrapper,
  AddChildButton,
  ResidentNumberInput,
  PhoneNumberInput,
  RemoveButton,
  ErrorMessage,
  DescriptionTitle,
  DescriptionBox
} from './style';
import { useRecoilValue } from 'recoil';
import { registrationDataState } from '../../../recoil';
import { registerAPI } from '@apis';

export const ChildrenRegisterPage = () => {
  const registrationData = useRecoilValue(registrationDataState);

  const [hasChild, setHasChild] = useState(undefined);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [accountPasswordMatch, setAccountPasswordMatch] = useState(true);
  const [chkIdCard, setChkIdCard] = useState(false);
  const [chkAccount, setChkAccount] = useState(false);
  const [chkMyData, setChkMyData] = useState(false);
  const [childrenData, setChildrenData] = useState([]);
  const [chkIdCardError, setChkIdCardError] = useState('');
  const [chkAccountError, setChkAccountError] = useState('');
  const [chkMyDataError, setChkMyDataError] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (index, type, value) => {
    const newData = [...childrenData];
    newData[index][type] = value;
    setChildrenData(newData);
  };

  const handleAddChild = (event) => {
    event.preventDefault();
    setChildrenData([...childrenData, {
      phoneNum1: '',
      phoneNum2: '',
      phoneNum3: '',
      ssn1: '',
      ssn2: ''
    }]);
  };


  const handleRemoveChild = (index) => {
    setChildrenData(childrenData.filter((_, idx) => idx !== index));
  };

  const handlePasswordChange = (index, value) => {
    const newData = [...childrenData];
    newData[index].password = value;
    setChildrenData(newData);

    setPasswordMatch(value === newData[index].confirmPassword);
  };

  const handleConfirmPasswordChange = (index, value) => {
    const newData = [...childrenData];
    newData[index].confirmPassword = value;
    setChildrenData(newData);

    setPasswordMatch(value === newData[index].password);
  };

  const handleAccountPasswordChange = (index, value) => {
    const newData = [...childrenData];
    newData[index].accountPassword = value;
    setChildrenData(newData);

    setAccountPasswordMatch(value === newData[index].confirmAccountPassword);
  };

  const handleConfirmAccountPasswordChange = (index, value) => {
    const newData = [...childrenData];
    newData[index].confirmAccountPassword = value;
    setChildrenData(newData);

    setAccountPasswordMatch(value === newData[index].accountPassword);
  };


  const handleRegister = async (event) => {
    event.preventDefault();
    let hasError = false;

    if (!chkIdCard) {
      setChkIdCardError('필수로 체크되어야 하는 항목입니다');
      hasError = true;
    } else {
      setChkIdCardError('');
    }

    if (!chkAccount) {
      setChkAccountError('필수로 체크되어야 하는 항목입니다');
      hasError = true;
    } else {
      setChkAccountError('');
    }

    if (!chkMyData) {
      setChkMyDataError('필수로 체크되어야 하는 항목입니다');
      hasError = true;
    } else {
      setChkMyDataError('');
    }

    if (hasError) {
      return;
    }
    if (!passwordMatch) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!accountPasswordMatch) {
      alert("계좌 비밀번호가 일치하지 않습니다.");
      return;
    }
    const requestData = {
      email: registrationData.email,
      password: registrationData.password,
      name: registrationData.name,
      phoneNum: `${registrationData.phoneNum1}-${registrationData.phoneNum2}-${registrationData.phoneNum3}`,
      ssn: `${registrationData.ssn1}-${registrationData.ssn2}`,
      birthdate: `${registrationData.birthDate}T12:00:00`,
      accountPassword: registrationData.accountPwd,
      childList: childrenData.map(child => {
        const localDateTime = `${child.birthdate}T12:00:00`;
        let phoneNum = '';
        if (child.phoneNum1) phoneNum += child.phoneNum1;
        if (child.phoneNum2) phoneNum += `-${child.phoneNum2}`;
        if (child.phoneNum3) phoneNum += `-${child.phoneNum3}`;

        let ssn = '';
        if (child.ssn1 && child.ssn2) {
          ssn = `${child.ssn1}-${child.ssn2}`;
        }
        return {
          email: child.email,
          password: child.password,
          name: child.name,
          phoneNum: phoneNum,
          ssn: ssn,
          birthdate: localDateTime,
          accountPassword: child.accountPassword,
          level1Reward: child.level1Reward,
          level2Reward: child.level2Reward,
          level3Reward: child.level3Reward
        };
      })
    };
    try {
      const responseData = await registerAPI(requestData);
      console.log(responseData);
      navigate('/');
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <TopContainer>
      <TopNavigationBar title={"자녀 정보 등록"}/>
      <RegisterWrapper>
        <RegisterTitle>Kook Child - 자녀 정보</RegisterTitle>
        <RegisterForm onSubmit={handleRegister}>
          <div><DescriptionTitle>자녀 정보를 등록하시겠습니까?</DescriptionTitle></div>
          <DescriptionBox>
            <p>등록 시 KB kook child 서비스 이용이 가능합니다.</p><br/>
            <p>• 자녀의 금육 교육에 동기부여를 할 수 있는 일일 금융 퀴즈 및 리워드 시스템 </p>
            <p>• 자녀에게 저축의 중요성을 알려주세요! </p><br/>
            <p>부모님이 이자를 얹어 줄 수 있는 부모 금리 지급 통장 개설 가능 </p><br/>
            <p>• 자녀에게 미션과 보상을 통해 금융에 한 발 더 다가갈 수 있는 기회를 주세요!</p>
          </DescriptionBox>
          <RadioGroup>
            자녀여부
            <RadioLabelWrapper>
              <Label>
                <input
                  type="radio"
                  name="hasChild"
                  value="yes"
                  checked={hasChild === true}
                  onChange={() => setHasChild(true)}
                  required
                />
                있음
              </Label>
              <Label>
                <input
                  type="radio"
                  name="hasChild"
                  value="no"
                  checked={hasChild === false}
                  onChange={() => setHasChild(false)}
                  required
                />
                없음
              </Label>
            </RadioLabelWrapper>
          </RadioGroup>
          {hasChild && (
            <>
              {
                childrenData.map((child, index) => (
                  <div key={index}>
                    <RemoveButton onClick={() => handleRemoveChild(index)}>- 빼기</RemoveButton> <br />

                    <label>이름</label>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={child.name || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].name = e.target.value;
                        setChildrenData(newData);
                      }}
                    />
                    <label>주민등록번호</label>
                    <ResidentNumberInput
                      value1={child.ssn1 || ''}
                      value2={child.ssn2 || ''}
                      onChange1={(e) => {
                        const newData = [...childrenData];
                        newData[index].ssn1 = e.target.value;
                        setChildrenData(newData);
                      }}
                      onChange2={(e) => {
                        const newData = [...childrenData];
                        newData[index].ssn2 = e.target.value;
                        setChildrenData(newData);
                      }}
                      required
                    />
                    <label>휴대폰번호</label>
                    <PhoneNumberInput
                      phoneNum1={child.phoneNum1 || ''}
                      phoneNum2={child.phoneNum2 || ''}
                      phoneNum3={child.phoneNum3 || ''}
                      onChange={(type, value) => handlePhoneNumberChange(index, type, value)}
                    />
                    <label>생년월일</label>
                    <Input
                      type="date"
                      placeholder="Birthdate"
                      value={child.birthdate || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].birthdate = e.target.value;
                        setChildrenData(newData);
                      }}
                    />
                    <label>이메일(ID)</label>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={child.email || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].email = e.target.value;
                        setChildrenData(newData);
                      }}
                    />
                    <label>비밀번호</label>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={child.password || ''}
                      onChange={(e) => handlePasswordChange(index, e.target.value)}
                    />

                    <label>비밀번호 확인</label>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      value={child.confirmPassword || ''}
                      onChange={(e) => handleConfirmPasswordChange(index, e.target.value)}
                    />
                    <label>계좌비밀번호</label>
                    <Input
                      type="password"
                      placeholder="Account Password"
                      value={child.accountPassword || ''}
                      onChange={(e) => handleAccountPasswordChange(index, e.target.value)}
                    />

                    <label>계좌비밀번호 확인</label>
                    <Input
                      type="password"
                      placeholder="Confirm Account Password"
                      value={child.confirmAccountPassword || ''}
                      onChange={(e) => handleConfirmAccountPasswordChange(index, e.target.value)}
                    />
                    <label>퀴즈 레벨 1 리워드</label>
                    <Input
                      type="number"
                      placeholder="Level 1 Reward"
                      value={child.level1Reward || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].level1Reward = parseInt(e.target.value);
                        setChildrenData(newData);
                      }}
                    />
                    <label>퀴즈 레벨 2 리워드</label>
                    <Input
                      type="number"
                      placeholder="Level 2 Reward"
                      value={child.level2Reward || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].level2Reward = parseInt(e.target.value);
                        setChildrenData(newData);
                      }}
                    />
                    <label>퀴즈 레벨 3 리워드</label>
                    <Input
                      type="number"
                      placeholder="Level 3 Reward"
                      value={child.level3Reward || ''}
                      onChange={(e) => {
                        const newData = [...childrenData];
                        newData[index].level3Reward = parseInt(e.target.value);
                        setChildrenData(newData);
                      }}
                    />
                  </div>
                ))}


              <AddChildButton onClick={handleAddChild}>+ 자녀 추가하기</AddChildButton>
            </>
          )}
          <CheckboxGroup>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={chkIdCard}
                onChange={(e) => setChkIdCard(e.target.checked)}
              />
              신분증확인
            </div>
            {chkIdCardError && <ErrorMessage>{chkIdCardError}</ErrorMessage>}
          </CheckboxGroup>

          <CheckboxGroup>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={chkAccount}
                onChange={(e) => setChkAccount(e.target.checked)}
              />
              계좌 개설 완료
            </div>
            {chkAccountError && <ErrorMessage>{chkAccountError}</ErrorMessage>}
          </CheckboxGroup>
          <CheckboxGroup>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={chkMyData}
                onChange={(e) => setChkMyData(e.target.checked)}
              />
              마이데이터 정보 제공 동의
            </div>
            {chkMyDataError && <ErrorMessage>{chkMyDataError}</ErrorMessage>}
          </CheckboxGroup>
          <Input type="submit" value="회원가입 완료" />
        </RegisterForm>
      </RegisterWrapper>
    </TopContainer>
  );
};