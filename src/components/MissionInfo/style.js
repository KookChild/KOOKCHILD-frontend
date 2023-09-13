import styled from 'styled-components';

export const MissionInfoContainer = styled.div`
    width: 342px;
    height: 337px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 15px;
`;
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 16px;
`;

export const StyledInput = styled.input`
    font-family: Arial;
    width: calc(100% - 10px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 4px;
`;

export const StyledTextArea = styled.textarea`
    font-family: Arial;
    width: calc(100% - 10px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 4px;
    height: 100px;
    resize: none;
    text-align: left;
    vertical-align: top;
`;