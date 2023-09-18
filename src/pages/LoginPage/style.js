import styled from 'styled-components';
import { PRIMARY, YELLOW } from '@utility/COLORS'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 40px);
  margin: 0 auto;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const LoginTitle = styled.h2`
text-shadow: 2px 2px 4px white;
margin-bottom: 20px;
font-size: 30px;
color: ${PRIMARY};
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-radius: 6px;
  border: none;
  background-color: #F8F8F8;
  &::placeholder {
    color: #D2D2D2;
  }
  &[type="submit"] {
    color: #fff;
    font-size: 16px;
    background-color: ${PRIMARY};
    margin-top: 20px;
    transition: background-color 0.3s;

  &:hover {
    background-color: ${YELLOW};
  }
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-bottom: 10px;
  font-size: 12px;
`;
