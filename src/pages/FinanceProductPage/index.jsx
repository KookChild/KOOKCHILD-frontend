import { useNavigate } from 'react-router-dom';
import { TopContainer, TopNavigationBar } from '@components'
import {
    buttonSection,
    FinanceProductButton,
    buttonTextContainer,
    textLine1,
    textLine2,
    textLine1Icon,
    buttonImage,
    buttonImage2,
    highlightText,
    FinanceProductButtonHover,
} from './style'
import { TextLine1 } from './FinanceProductRegister/style';
import { useState } from 'react';



export const FinanceProductPage = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };
    
    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };
    
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };
    
    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };

    return (
        <TopContainer>
            <TopNavigationBar title="자녀-부모 연계상품" />
            <div style={buttonSection}>
                <div 
                style={isHovered1  ? FinanceProductButtonHover : FinanceProductButton} 
                onClick={() => handleButtonClick('/financeproduct/register')}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                >
                    <div style={buttonTextContainer}>
                        <div>
                            <span style={textLine1}>자녀 금융교육<br />우대금리 "입출금" 통장
                                <span style={textLine1Icon}>&gt;</span>
                            </span>
                            <span style={textLine2}>KB국민은행 최고
                                <span style={highlightText}> 연 2.5%</span><br />
                            </span>
                            <span style={textLine2}>부모님 지급 금리 최고
                                <span style={highlightText}> 연 30% 가능</span>
                            </span>
                        </div>
                        <img style={buttonImage} src="./characterImage/rabbit.png" alt="character" />
                    </div>
                </div>
                <div
                style={isHovered2 ? FinanceProductButtonHover : FinanceProductButton} 
                onClick={() => handleButtonClick('/financeproduct/register')}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                >
                    <div style={buttonTextContainer}>
                        <div>
                            <span style={textLine1}>차곡차곡 자녀 Dream<br />우대금리 "정기 예금" 통장
                                <span style={textLine1Icon}>&gt;</span>
                            </span>
                            <span style={textLine2}>KB국민은행 최고
                                <span style={highlightText}> 연 3.0%</span><br />
                            </span>
                            <span style={textLine2}>부모님 지급 금리 최고
                                <span style={highlightText}> 연 20% 가능</span>
                            </span>
                        </div>
                        <img style={buttonImage} src="./characterImage/elegator.png" alt="character" />
                    </div>
                </div>
                <div
                style={isHovered3 ? FinanceProductButtonHover : FinanceProductButton} 
                onClick={() => handleButtonClick('/financeproduct/register')}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                >
                    <div style={buttonTextContainer}>
                        <div>
                            <span style={textLine1}>차곡차곡 자녀 Dream<br />우대금리 "적금" 통장
                                <span style={textLine1Icon}>&gt;</span>
                            </span>
                            <span style={textLine2}>KB국민은행 최고
                                <span style={highlightText}> 연 4.0%</span><br />
                            </span>
                            <span style={textLine2}>부모님 지급 금리 최고
                                <span style={highlightText}> 연 20% 가능</span>
                            </span>
                        </div>
                        <img style={buttonImage2} src="./characterImage/bear.png" alt="character" />
                    </div>
                </div>
            </div>
        </TopContainer>
    )
}
