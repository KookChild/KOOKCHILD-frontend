import styled from 'styled-components';
import { YELLOW, PRIMARY, DARK_GRAY, MEDIUM_GRAY } from '@utility/COLORS'
import { BsSearch } from 'react-icons/bs'

export const ChildItemContainer = styled.div`
    height: 120px;
    position: relative;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px 10px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
`;

export const ChildUpSection = styled.div`
    color: ${DARK_GRAY};
    font-size: 14px;
    position: absolute;
    width: 350px;
    font-family: 'sdBo';
`;

export const ChildLeftSection = styled.div`
    top: 30px;
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: flex-start;
    position: absolute;

    .checkIcon {
        width: 30px;
        height: 30px;
        background: ${YELLOW};
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
    top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 230px;
    position: absolute;
    background: white;
    right: 0;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;

    h3, p {
        margin: 0;
    }

    .title {
        flex-grow: 1;
        letter-spacing: 0px;
        font-size: 18px;
        color: #010812;
        opacity: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
    }

    .level {
        font-family: 'kbFontBold';
        color: white;
        background: ${({ level }) =>
            level === 1 ? '#FFA07A' :
            level === 2 ? '#20B2AA' :
            '#9370DB'};
        font-size: 13px;
        white-space: nowrap;
        padding: 2px 5px;
        border-radius: 5px;
    }
`;

export const ChildUnderSection = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    height: 40px;
    right:10px;
    span{
        color: ${PRIMARY};
    }
    .moneyIcon{
        color: ${PRIMARY};
    }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  right: 13px;
  z-index: 1;
`;

export const SearchInput = styled.input`
  width: 390px;
  padding: 10px 15px;
  border: 1px solid ${DARK_GRAY};
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: ${PRIMARY};
  }
  ::placeholder {
    color: ${MEDIUM_GRAY};
  }
`;
