import styled from 'styled-components';
import { YELLOW } from '@utility/COLORS'

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 399px;
    height: 80px;
    width: 320px;
    padding-left: 13px;
    padding-right: 13px;
    opacity: 1;
    background: ${props => props.isEven ? '#FFFFFF' : '#F6F7F8'} 0% 0% no-repeat padding-box;
    cursor: pointer;

    &:hover {
        background: #E5E5E5;
    }
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    .circle {
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
