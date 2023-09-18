import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopContainer } from '@components';
import {
  LoginWrapper,
  LoginTitle,
  LoginForm,
  Input,
  ErrorMessage
} from './style';
import { loginAPI } from '@apis';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userType = JSON.parse(localStorage.getItem('parent'));
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

  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <TopContainer>
      <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
          <Input type="submit" value="Login" />
          <Input type="button" value="회원가입" onClick={handleSignup} />
        </LoginForm>
      </LoginWrapper>
    </TopContainer>
  );
}