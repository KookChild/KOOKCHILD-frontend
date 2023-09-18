import React, { useState } from 'react';
import NumberRoulette from './NumberRoulette';
import { TopContainer, TopNavigationBar } from '@components'
import {
    buttonSection,
    textLine1,
    textLine2,
    textLine3,
    textLine4,
    textLine5,
    centerPlus,
    textLine1Icon,
    buttonImage,
    highlightText,
    explainText,
    ProductTitle,
    ProductOutline,
    horizontalLine,
    CalculateInterest,
    flexContainer,
    flexContainer2,
    SetInterestContainer,
    inputStyle1,
    inputStyle2,
    calculateInterestButton,
    resultTextStyle,
} from './style'

export const FinanceProductRegister = () => {

    const [parentInterest, setParentInterest] = useState('');
    const [childMoney, setChildMoney] = useState('');
    const [result, setResult] = useState(null);

    const calculateInterest = () => {
        const interest = parseFloat(parentInterest.replace(/,/g, ''));
        const money = parseFloat(childMoney.replace(/,/g, ''));

        if (isNaN(interest) || isNaN(money)) {
            return;
        }

        const totalInterest = ((2.5 + interest) / 1200) * money;
        setResult(totalInterest);
    };

    const addCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    return (
        <TopContainer>
            <TopNavigationBar title="자녀-부모 연계상품" />

            <div style={ProductTitle}>
                <span style={textLine1}>자녀 금융 교육<br></br>
                    우대금리 입출금 통장
                </span>

            </div>

            <div style={ProductOutline}>
                <div style={flexContainer}>
                    <span style={textLine2}>은행 지급 최고 금리</span>
                    <span style={textLine2}>2.5%</span>
                </div>
                <div style={horizontalLine}></div>
                <div style={flexContainer}>
                    <span style={textLine2}>부모님 지급 가능 최대 금리</span>
                    <span style={textLine2}>30.0%</span>
                </div>
                <div style={horizontalLine}></div>
                <div style={flexContainer}>
                    <span style={textLine2}>기간</span>
                    <span style={textLine2}>6~36개월</span>
                </div>
                <div style={horizontalLine}></div>
                <div style={flexContainer}>
                    <span style={textLine2}>금액</span>
                    <span style={textLine2}>1만원 이상</span>
                </div>
            </div>


            <div style={buttonSection}>
                <div style={CalculateInterest}>
                    <span style={explainText}>월 지급 이자 용돈 계산하기</span>
                    <div style={SetInterestContainer}>
                        <div style={flexContainer}>
                            <span style={textLine3}>은행 최고 금리</span>
                            <span style={textLine3}>2.5%</span>
                        </div>
                        <div style={flexContainer}>
                            <span style={centerPlus}>+</span>
                        </div>
                        <div style={flexContainer}>
                            <span style={textLine3}>부모님 지급 금리</span>
                            <input
                                style={inputStyle1} // 스타일 추가
                                type="text"
                                value={parentInterest}
                                onChange={(e) => setParentInterest(e.target.value)}
                                placeholder=""
                            />
                            <span style={textLine3}>%</span>

                        </div><br></br>
                        <div style={flexContainer2}>
                            <span style={textLine2}>자녀가 용돈을</span>
                            <input
                                style={inputStyle2}
                                type="text"
                                value={addCommas(childMoney)}
                                onChange={(e) => setChildMoney(e.target.value.replace(/,/g, ''))}
                                placeholder=""
                            />
                            <span style={textLine2}>원 저축했을 때,</span>
                        </div>
                        <button style={calculateInterestButton} onClick={calculateInterest}>용돈처럼 받게 될 이자액은?</button>

                        <div style={flexContainer2}>
                            <span style={textLine2}>예상 월 지급 이자액은 약&nbsp;</span>
                            {result !== null && (
                                <span style={resultTextStyle}><NumberRoulette initialNumber={result.toFixed(0).toLocaleString()} /></span>
                            )}
                            <span style={textLine2}>&nbsp;원 입니다.</span>
                        </div>
                    </div>


                </div>
            </div>
        </TopContainer>
    )
}
