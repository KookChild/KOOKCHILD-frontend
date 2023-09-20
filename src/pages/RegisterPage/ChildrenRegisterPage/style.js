import styled from 'styled-components'
import { PRIMARY, YELLOW, GRAY } from '@utility/COLORS'

export const RegisterWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const RegisterTitle = styled.h2`
  text-shadow: 2px 2px 4px white;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${PRIMARY};
`

export const RegisterForm = styled.form`
  width: 100%;
  position: relative;
`

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
  &[type='email'] {
    margin-bottom: 10px;
  }
`

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

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;  // 여기를 추가합니다.
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const RadioLabelWrapper = styled.div`
  display: flex;
  gap: 10px; // 라벨들 사이에 간격을 줍니다.
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
    margin-right: 5px;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #888888;
    border-radius: 50%;

    &:checked {
      border: 2px solid ${YELLOW};
      background-color: ${YELLOW};
      &:after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        margin: 3px;
      }
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-top: 10px;

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      margin-right: 5px;
    }
  }
`;

export const AddChildButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${YELLOW};
  border-radius: 10px;
  color: ${YELLOW};
  font-size: 16px;
  font-family : 'sdBo';
  width: 100%;
  height: 38px;
`;

export const RemoveButton = styled.button`
  right: 20px;
  padding: 5px 10px;
  border: 0.5px solid tomato;
  border-radius: 10px;
  color: tomato;
  display: flex;
  position: absolute;
  right: 0;
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

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-bottom: 10px;
  font-size: 12px;
`;
export const DescriptionTitle = styled.h3`
  margin-bottom: 10px;
`
export const DescriptionBox = styled.div`
  background: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom : 10px;
`


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
        placeholder="주민등록번호 앞자리"
        value={ssn1}
        onChange={e => onChange1(e)}
        required
      />
      <span> - </span>
      <Input
        type="text"
        placeholder="주민등록번호 뒷자리"
        value={ssn2}
        onChange={e => onChange2(e)}
        required
      />
    </ResidentNumberInputWrapper>
  )
}

export const PhoneNumberInput = ({ phoneNum1, phoneNum2, phoneNum3, onChange }) => {
  const handleInputChange = (e, type) => {
    onChange(type, e.target.value);
  };

  return (
    <PhoneNumberInputWrapper>
      <Input
        type="text"
        value={phoneNum1}
        onChange={(e) => handleInputChange(e, 'phoneNum1')}
        maxLength={3}
        required
      />
      -
      <Input
        type="text"
        value={phoneNum2}
        onChange={(e) => handleInputChange(e, 'phoneNum2')}
        maxLength={4}
        required
      />
      -
      <Input
        type="text"
        value={phoneNum3}
        onChange={(e) => handleInputChange(e, 'phoneNum3')}
        maxLength={4}
        required
      />
    </PhoneNumberInputWrapper>
  );
}
