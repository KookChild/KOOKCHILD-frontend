import React from 'react';
import { HeaderContainer } from './style';

export const BackHeader = ({ text, onBackClick }) => {
    return (
        <HeaderContainer onClick={onBackClick}>
            &lt; {text}
        </HeaderContainer>
    );
}