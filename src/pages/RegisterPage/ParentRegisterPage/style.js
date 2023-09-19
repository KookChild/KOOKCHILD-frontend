import styled from 'styled-components'
import { PRIMARY, YELLOW } from '@utility/COLORS'

export const RegisterWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
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
`

export const PhoneNumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 30px;
  margin-top: 10px;

  input, select {
    flex: 1;
    height: 38px;
    width: 30%;
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
`
export const ResidentNumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 30px;
  margin-top: 10px;

  input, select {
    flex: 1;
    height: 38px;
    width: 30%;
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
`

export const ResidentNumberInput = ({
  value1: ssn1,
  value2: ssn2,
  onChange1,
  onChange2,
}) => {
  return (
    <ResidentNumberInputWrapper>
      <input
        type="text"
        placeholder="YYMMDD"
        value={ssn1}
        onChange={e => onChange1(e)}
        required
      />
      <span> - </span>
      <input
        type="text"
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
      <input
        type="text"
        placeholder=""
        value={phoneNumber1}
        onChange={e => onChange('phoneNumber1', e.target.value)}
        required
      />
      <span> - </span>
      <input
        type="text"
        placeholder=""
        value={phoneNumber2}
        onChange={e => onChange('phoneNumber2', e.target.value)}
        required
      />
      <span> - </span>
      <input
        type="text"
        placeholder=""
        value={phoneNumber3}
        onChange={e => onChange('phoneNumber3', e.target.value)}
        required
      />
    </PhoneNumberInputWrapper>
  )
}
