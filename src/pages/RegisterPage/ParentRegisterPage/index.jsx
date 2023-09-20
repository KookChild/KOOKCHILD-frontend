import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopContainer, TopNavigationBar } from '@components';
import {
  RegisterWrapper,
  RegisterTitle,
  RegisterForm,
  Input,
  PhoneNumberInput,
  ResidentNumberInput,
  DuplicateButton,
  EmailContainer,
  EmailErrorMessage
} from './style';
import { registrationDataState } from '../../../recoil';
import { useRecoilState } from 'recoil';
import { checkEmailAvailabilityAPI } from '@apis';
import Swal from 'sweetalert2';

export const ParentRegisterPage = () => {
  const [name, setName] = useState('');
  const [ssn1, setSsn1] = useState('');
  const [ssn2, setSsn2] = useState('');
  const [phoneNum1, setPhoneNum1] = useState('');
  const [phoneNum2, setPhoneNum2] = useState('');
  const [phoneNum3, setPhoneNum3] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [accountPwd, setAccountPwd] = useState('');
  const [accountPwdChk, setAccountPwdChk] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [emailAvailable, setEmailAvailable] = useState(null);
  const [registrationData, setRegistrationData] = useRecoilState(registrationDataState);

  const navigate = useNavigate();

  const handleCheckEmailAvailability = async () => {
    if (email) {
      try {
        const isAvailable = await checkEmailAvailabilityAPI(email);
        setEmailAvailable(isAvailable);
        console.log("Email availability checked:", isAvailable);
      } catch (error) {
        console.error("Error checking email availability", error);
        setEmailAvailable(null);
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: '<span style="font-size: 20px;">이메일을 입력해주세요.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
    }
  }

  const handlePhoneNumberChange = (field, value) => {
    switch (field) {
      case 'phoneNumber1':
        setPhoneNum1(value);
        break;
      case 'phoneNumber2':
        setPhoneNum2(value);
        break;
      case 'phoneNumber3':
        setPhoneNum3(value);
        break;
      default:
        break;
    }
  };
  const handleNext = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 20px;">올바른 이메일 형식을 입력해주세요.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
      return;
    }
    if (emailAvailable === false) {
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 20px;">이미 사용 중인 이메일입니다.<br/>다른 이메일을 입력하세요.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
      return;
    } else if (emailAvailable === null) {
      Swal.fire({
        icon: 'warning',
        title: '<span style="font-size: 20px;">이메일 중복 확인을 해주세요.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
      return;
    }
    if (password !== passwordChk) {
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 20px;">비밀번호가 일치하지 않습니다.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
      return;
    }
    if (accountPwd !== accountPwdChk) {
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 20px;">계좌 비밀번호가 일치하지 않습니다.</span>',
        customClass: {
          container: 'custom-swal-container',
        },
      });
      return;
    }
    setRegistrationData({
      ...registrationData,
      name,
      ssn1,
      ssn2,
      phoneNum1,
      phoneNum2,
      phoneNum3,
      birthDate,
      email,
      password,
      accountPwd
    });
    navigate('/register/children');
  };

  return (
    <TopContainer>
      <TopNavigationBar title={"회원가입"} />
      <RegisterWrapper>
        <RegisterTitle>Kook Child 회원 가입</RegisterTitle>
        <RegisterForm>
          <label>이름</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>주민등록번호</label>
          <ResidentNumberInput
            value1={ssn1}
            value2={ssn2}
            onChange1={(e) => setSsn1(e.target.value)}
            onChange2={(e) => setSsn2(e.target.value)}
            required
          />
          <label>휴대폰번호</label>
          <PhoneNumberInput
            phoneNumber1={phoneNum1}
            phoneNumber2={phoneNum2}
            phoneNumber3={phoneNum3}
            onChange={handlePhoneNumberChange}
            required
          />
          <label>생년월일</label>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <label>이메일(ID)</label>
          <DuplicateButton type="button" onClick={handleCheckEmailAvailability}>중복 확인</DuplicateButton>
          <EmailContainer>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailAvailable === false && <EmailErrorMessage color="#ff6b6b">이미 사용중인 이메일입니다.</EmailErrorMessage>}
            {emailAvailable === true && <EmailErrorMessage color="#4CAF50">사용 가능한 이메일입니다.</EmailErrorMessage>}
          </EmailContainer>
          <label>비밀번호</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>비밀번호 확인</label>
          <Input
            type="password"
            value={passwordChk}
            onChange={(e) => setPasswordChk(e.target.value)}
            required
          />
          <label>계좌비밀번호</label>
          <Input
            type="password"
            value={accountPwd}
            onChange={(e) => setAccountPwd(e.target.value)}
            required
          />
          <label>계좌비밀번호 확인</label>
          <Input
            type="password"
            value={accountPwdChk}
            onChange={(e) => setAccountPwdChk(e.target.value)}
            required
          />
          <Input
            type="button"
            value="다음"
            onClick={handleNext}
          />
        </RegisterForm>
      </RegisterWrapper>
    </TopContainer>
  );
};
