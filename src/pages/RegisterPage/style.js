import styled from 'styled-components'
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
  justify-content: center;
`

export const RegisterWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
`

export const RegisterTitle = styled.h2`
  text-shadow: 2px 2px 4px white;
  margin-bottom: 20px;
  font-size: 30px;
  color: ${PRIMARY};
`

export const RegisterForm = styled.form`
  width: 100%;
`

export const Input = styled.input`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-radius: 6px;
  border: none;
  background-color: #f8f8f8;
  &::placeholder {
    color: #d2d2d2;
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

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin-bottom: 10px;
  font-size: 12px;
`
export const PhoneNumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 30px;
  
  select {
    width: 70px;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-right: 5px;
    border-radius: 6px;
    border: none;
    background-color: #f8f8f8;
  }
  input, select {
    flex: 1;
    height: 48px;
    width: 30%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 6px;
    border: none;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  }
`
export const ResidentNumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 30px;
  
  input, select {
    flex: 1;
    height: 48px;
    width: 30%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 6px;
    border: none;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`
export const ResidentNumberInput = ({
  residentNumber1,
  residentNumber2,
  onChange,
}) => {
  return (
    <ResidentNumberInputWrapper>
      <input
        type="text"
        placeholder="주민등록번호 앞자리"
        value={residentNumber1}
        onChange={e => onChange('residentNumber1', e.target.value)}
        required
      />
      <span> - </span>
      <input
        type="text"
        placeholder="주민등록번호 뒷자리"
        value={residentNumber2}
        onChange={e => onChange('residentNumber2', e.target.value)}
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
  const handlePhoneNumber1Change = e => {
    const value = e.target.value
    if (
      /^[0-9]{1,3}$/.test(value) &&
      parseInt(value) >= 10 &&
      parseInt(value) <= 19
    ) {
      onChange('phoneNumber1', value)
    }
  }
  return (
    <PhoneNumberInputWrapper>
      <select
        value={phoneNumber1 || '10'}
        onChange={handlePhoneNumber1Change}
        required
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i} value={`0${i + 10}`}>{`0${i + 10}`}</option>
        ))}
      </select>
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
