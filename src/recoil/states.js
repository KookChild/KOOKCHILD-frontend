import { atom } from 'recoil';

export const registrationDataState = atom({
  key: 'registrationDataState',
  default: {
    name: '',
    ssn1: '',
    ssn2: '',
    phoneNum1: '',
    phoneNum2: '',
    phoneNum3: '',
    birthDate: '',
    email: '',
    password: '',
    accountPwd: ''
  }
});
