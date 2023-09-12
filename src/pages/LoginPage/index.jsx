import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CenteredContainer,
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle,
  Form,
  Input,
  Button
} from './style';
import imgSrc3 from './prefer.png';
import { loginAPI } from '../../apis/login/index';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginAPI(email, password);
      console.log("Token received:", token);
      navigate('/info');
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <CenteredContainer>
        <Header>
          <HeaderContent>
            <HeaderImage src={imgSrc3} />
            <HeaderTitle>로그인</HeaderTitle>
          </HeaderContent>
        </Header>
        <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Login</Button>
    </Form>
      </CenteredContainer>
    </div>
  );
}