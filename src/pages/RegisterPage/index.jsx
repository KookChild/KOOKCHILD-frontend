import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopContainer } from '@components';
import {
  CenteredContainer,
  RegisterWrapper,
  RegisterTitle,
  RegisterForm,
  Input,
  ErrorMessage,
  PhoneNumberInput,
  ResidentNumberInput,
} from './style';
import { loginAPI } from '../../apis/login/index';

export const RegisterPage = () => {
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
  const [hasChild, setHasChild] = useState('');
  const [chkIdCard, setChkIdCard] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userType = localStorage.getItem('parent');
      if (userType) {
        navigate('/parent');
      } else {
        navigate('/child');
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, parent } = await loginAPI(email, password);
      if (parent) {
        navigate('/parent');
      } else {
        navigate('/child');
      }
    } catch (error) {
      setErrorMsg('이메일 혹은 비밀번호 일치하지 않습니다.');
    }
  };

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

  return (
    <TopContainer>
      <RegisterWrapper>
        <RegisterTitle>Kook Child 회원 가입</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          이름
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          주민등록번호
          <ResidentNumberInput
            value1={ssn1}
            value2={ssn2}
            onChange1={(e) => setSsn1(e.target.value)}
            onChange2={(e) => setSsn2(e.target.value)}
            required
          />
          휴대폰번호
          <PhoneNumberInput
            phoneNumber1={phoneNum1}
            phoneNumber2={phoneNum2}
            phoneNumber3={phoneNum3}
            onChange={handlePhoneNumberChange}
            required
          />
          이메일(ID)
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          비밀번호 확인
          <Input
            type="password"
            value={passwordChk}
            onChange={(e) => setPasswordChk(e.target.value)}
            required
          />
          계좌비밀번호
          <Input
            type="password"
            value={accountPwd}
            onChange={(e) => setAccountPwd(e.target.value)}
            required
          />
          계좌비밀번호 확인
          <Input
            type="password"
            value={accountPwdChk}
            onChange={(e) => setAccountPwdChk(e.target.value)}
            required
          />
          자녀여부
          <Input
            type="radio"
            value={hasChild}
            onChange={(e) => setHasChild(e.target.value)}
            required
          />
          <Input
            type="radio"
            value={hasChild}
            onChange={(e) => setHasChild(e.target.value)}
            required
          />
          신분증확인
          <Input
            type="checkbox"
            value={chkIdCard}
            onChange={(e) => setChkIdCard(e.target.value)}
            required
          />
          <Input type="submit" value="Register" />
        </RegisterForm>
      </RegisterWrapper>
    </TopContainer>
  );
};
