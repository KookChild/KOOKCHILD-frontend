import { atom } from 'recoil'
export const selectedChild = atom({
  key: 'selectedChild', //고유값이어야함
  default: 0,
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
