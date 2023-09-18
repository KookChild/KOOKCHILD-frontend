import { styled } from 'styled-components'

export const Header = styled.div`
  padding: 10px;
  text-align: center;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const HeaderImage = styled.div`
  width: 20px; /* 이미지 너비 조정 */
  height: 20px; /* 이미지 높이 조정 */
  margin-right: 13px; /* 이미지와 title 간의 간격 설정 */
`

export const HeaderTitle = styled.h1`
  font-size: 20px; /* title의 글꼴 크기 조정 */
  font-weight: bold; /* title 텍스트 굵게 설정 */
  margin: 0; /* title의 margin 제거 */
`
export const LogoutButton = styled.button`
    position: absolute;
    top: 30px;
    right: 20px;
    width: 67px;
    height: 22px;
    color: white;
    border: none;
    background: black;
    border-radius: 10px;
`