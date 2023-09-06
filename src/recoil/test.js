import { atom } from 'recoil'
export const TestAtom = atom({
  key: 'TestAtom', //고유값이어야함
  default: [],
})

{
  /* 문법 :
const [age,setTest] = useRecoilState(TestAtom)

setter만 필요하면:
const setTest = useSetRecoilState(TestAtom)

값만 필요하면:
const setTest = useRecoilValue(TestAtom) 
*/
}
