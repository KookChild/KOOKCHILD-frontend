import styled from 'styled-components'

export const FilterContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin: auto;
`

export const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  magin-left: 0px;
  text-align: left;
  line-height: 40px;
  font-size: 22px;

  font-family: kbFontBold;
`
export const ChallengeContainer = styled.div`
  width: 360px;
  margin: auto;
  font-family: 'SUIT Variable';
  text-align: center;
  flex-direction: column;
  align-items: center;
`
export const TotalCountContainer = styled.div`
  margin-left: 5%;
  font-weight: bold;
`
export const TotalCountTextContainer = styled.span`
  color: red;
`
export const ChallengeListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 이 부분을 추가했습니다.
  padding-bottom: 50px;
`
