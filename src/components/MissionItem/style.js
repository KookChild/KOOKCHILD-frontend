import styled from 'styled-components';
import { YELLOW, PRIMARY } from '@utility/COLORS'

export const ItemContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 399px;
    height: 80px;
    width: 360px;
    padding-left: 13px;
    padding-right: 13px;
    opacity: 1;
    background: ${props => props.even ? '#f0f0f0' : '#FFFFFF'} 0% 0% no-repeat padding-box;
    cursor: pointer;

    &:hover {
        background: #E5E5E5;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    .checkIcon {
        width: 25px;
        height: 25px;
        background: ${props => {
            if (props.parentConfirm) {
                return '#98C37F';
            } else if (props.childConfirm) {
                return YELLOW;
            } else {
                return '#84888B';
            }
        }} 0% 0% no-repeat padding-box;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: inset 0px 1px 3px #00000029;
        border-radius: 15px;
        color: white;
        opacity: 1;
    }
`;

export const MiddleSection = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3, p {
        margin: 0;
    }
    .title {
        letter-spacing: 0px;
        font-size: 18px;
        color: #010812;
        opacity: 1;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
    }

    .date{
        color: #84888B;
        font-size: 13px;
    }
`;

export const RightSection = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 13px;
`;

export const ChildItemContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 115px;
    position: relative;
    background: #f0f0f0;
`;

export const ChildLeftSection = styled.div`
background: #f0f0f0;
    display: flex;
    height: 76.66px;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    position: absolute; // 위치 조정
    top: 0;
    left: 0;

    .checkIcon {
        width: 30px;
        height: 30px;
        background: ${props => {
            if (props.parentConfirm) {
                return '#98C37F';
            } else if (props.childConfirm) {
                return YELLOW;
            } else {
                return '#84888B';
            }
        }} 0% 0% no-repeat padding-box;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: inset 0px 1px 3px #00000029;
        border-radius: 15px;
        color: white;
        opacity: 1;
    }
`;

export const ChildRightSection = styled.div`
    flex: 1;
    display: flex;
    height: 76.66px;
    width: 270px;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    background: white;
    justify-content: center;
    top: 0;
    right: 40px;
    padding-left: 20px;
    border-radius: 10px;
    h3, p {
        margin: 0;
    }
    .title {
        letter-spacing: 0px;
        font-size: 18px;
        color: #010812;
        opacity: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
    }

    .date{
        color: #84888B;
        font-size: 13px;
    }
`;

export const ChildUnderSection = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    height: 40px;
    right:40px;
    p{
        margin-top:10px;
    }
    span{
        color: ${PRIMARY};
    }
    .moneyIcon{
        color: ${PRIMARY};
    }
`;

export const RewardButton = styled.button`
  width: 60px;
  margin-top: 8px;
  padding: 5px 10px;
  background-color: #98C37F;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  right: 13px;
`;