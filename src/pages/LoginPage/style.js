import styled from 'styled-components';
import { PRIMARY, YELLOW } from '@utility/COLORS'

export const CenteredContainer = styled.div`
  height: 844px;
  width: 390px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 10px;
  text-align: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const HeaderImage = styled.img`
  width: 20px;
  margin-right: 30px;
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 120px;
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
  margin-bottom: 16px;
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
