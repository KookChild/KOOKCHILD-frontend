import { TopContainer, TopNavigationBar } from '@components'
import {
    buttonSection,
    FinanceProductButton,
    buttonTextContainer,
    textLine1,
    textLine2,
    textLine1Icon,
    buttonImage,
    highlightText,
    ProductTitle,
    ProductOutline,
    horizontalLine,
    CalculateInterest
} from './style'



export const FinanceProductRegister = () => {
    return (
        <TopContainer>
            <TopNavigationBar title="자녀-부모 연계상품" />

            <div style={ProductTitle}>
                <span style={textLine1}>자녀 금융 교육<br></br>
                    우대금리 입출금 통장
                </span>

            </div>

            <div style={ProductOutline}>
                <span style={textLine2}>최고금리</span>
                <div style={horizontalLine}></div>
                <span style={textLine2}>기간</span>
                <div style={horizontalLine}></div>
                <span style={textLine2}>금액</span>          
            </div>


            <div style={buttonSection}>
                <div style={CalculateInterest}>
                    <div style={buttonTextContainer}>
                        <div>
                            <span style={textLine1}>제작중</span>

                            <span style={textLine2}>제작중
                                <span style={highlightText}> 제작중</span><br />
                            </span>
                            <span style={textLine2}>부모님 지급 금리 최고
                                <span style={highlightText}> 연 20% 가능</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </TopContainer>
    )
}
