import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CenteredContainer,
  LoginWrapper,
  LoginTitle,
  LoginForm,
  Input,
  ErrorMessage,
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle
} from './style';
import imgSrc3 from './prefer.png';
import { loginAPI } from '../../apis/login/index';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
      setErrorMsg("이메일 혹은 비밀번호 일치하지 않습니다.");
    }
  };

  return (
    <CenteredContainer>
      <Header>
        <HeaderContent>
          <HeaderImage src={imgSrc3} />
          <HeaderTitle>로그인</HeaderTitle>
        </HeaderContent>
      </Header>
      <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
          <Input type="submit" value="Login" />
        </LoginForm>
      </LoginWrapper>
    </CenteredContainer>
  );
}