import { styled } from 'styled-components'

export const CenteredContainer = styled.div`
  width: 100%; /* 가로 크기 */
  height: 100%; /* 세로 크기 */
  box-sizing: border-box;
  border: 1px solid #ccc; /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */
  overflow-y: auto;
  position: relative;
`
