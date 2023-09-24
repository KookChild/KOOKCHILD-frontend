import styled from 'styled-components'
import { PRIMARY, YELLOW, GRAY } from '@utility/COLORS'

export const RegisterWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const RegisterTitle = styled.h2`
  text-shadow: 2px 2px 4px white;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${PRIMARY};
`;

export const RegisterForm = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  margin-bottom: 30px;
  margin-top: 10px;
  border-radius: 6px;
  border: none;
  background-color: #f8f8f8;
  outline: none;
  &::placeholder {
    color: #d2d2d2;
  }
  &:focus {
    border: 2px solid ${YELLOW};
  }
  &[type='submit'] {
    color: #fff;
    font-size: 16px;
    background-color: ${PRIMARY};
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${YELLOW};
    }
  }
  &[type='button'] {
    color: #fff;
    font-size: 16px;
    background-color: ${PRIMARY};
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${YELLOW};
    }
  }
  &[type='email'] {
    margin-bottom: 10px;
  }
`;

export const DuplicateButton = styled.button`
  margin-left: 10px;
  border-radius: 7px;
  background: ${GRAY};
  color: white;
  border: none;
  padding: 3px 5px;
`;

export const EmailContainer = styled.div`
  position: relative;
  margin-bottom: 20px;  // 이 값을 조절하여 아래쪽 여백을 조정하세요.
`;
export const EmailErrorMessage = styled.p`
  color: ${props => props.color || "#ff6b6b"};
  margin-bottom: 10px;
  font-size: 13px;
  position: absolute;
`;


export const PhoneNumberInputWrapper = styled.div`
  input, select {
    flex: 1;
    height: 38px;
    width: 27%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 6px;
    border: none;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    outline: none;
    &:focus {
      border: 2px solid ${YELLOW};
    }
  }
`;
export const ResidentNumberInputWrapper = styled.div`

  input, select {
    flex: 1;
    height: 38px;
    width: 44%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 6px;
    border: none;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    outline: none;
    &:focus {
      border: 2px solid ${YELLOW};
    }
  }
`;

export const ResidentNumberInput = ({
  value1: ssn1,
  value2: ssn2,
  onChange1,
  onChange2,
}) => {
  return (
    <ResidentNumberInputWrapper>
      <Input
        type="text"
        placeholder="YYMMDD"
        value={ssn1}
        onChange={e => onChange1(e)}
        required
      />
      <span> - </span>
      <Input
        type="password"
        placeholder=""
        value={ssn2}
        onChange={e => onChange2(e)}
        required
      />
    </ResidentNumberInputWrapper>
  )
}

export const PhoneNumberInput = ({
  phoneNumber1,
  phoneNumber2,
  phoneNumber3,
  onChange,
}) => {
  return (
    <PhoneNumberInputWrapper>
      <Input
        type="text"
        placeholder=""
        value={phoneNumber1}
        onChange={e => onChange('phoneNumber1', e.target.value)}
        required
      />
      <span> - </span>
      <Input
        type="text"
        placeholder=""
        value={phoneNumber2}
        onChange={e => onChange('phoneNumber2', e.target.value)}
        required
      />
      <span> - </span>
      <Input
        type="text"
        placeholder=""
        value={phoneNumber3}
        onChange={e => onChange('phoneNumber3', e.target.value)}
        required
      />
    </PhoneNumberInputWrapper>
  )
}
