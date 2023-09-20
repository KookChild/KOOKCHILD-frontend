import { styled } from 'styled-components'
import { YELLOW } from '@utility/COLORS'

export const ChallengeTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding: 30px 10px;
`
export const ChallengeContent = styled.div`
  font-size: 19px;
  text-align: center;
  padding: 20px 30px;
`

export const ChallengeConfirmButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${YELLOW};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: gold;
    }
`;

export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChallengeImg = styled.img`
  height: 100%;
`
export const ChallengeImgWrapper = styled.div`
  width: 200px; /* 원하는 너비 설정 */
  height: 200px; /* 원하는 높이 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
 
`
export const ChallengeContentImgContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const commonSwalOptions = {
  customClass: {
    container: 'custom-swal-container',
  },
};

export const CustomSwalContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow-y: auto;
`;