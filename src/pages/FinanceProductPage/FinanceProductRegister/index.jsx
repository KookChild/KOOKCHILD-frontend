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
} from './style'



export const FinanceProductRegister = () => {
    return (
        <TopContainer>
            <TopNavigationBar title="자녀-부모 연계상품" />
            <div style={buttonSection}>
                <div style={FinanceProductButton}>
                    <div style={buttonTextContainer}>
                        <div>
                            <span style={textLine1}>제작중<br />제작중
                                
                            </span>
                            <span style={textLine2}>제작중
                                <span style={highlightText}> 제작중</span><br />
                            </span>
                            <span style={textLine2}>부모님 지급 금리 최고
                                <span style={highlightText}> 연 20% 가능</span>
                            </span>
                        </div>
                        <img style={buttonImage} src="./characterImage/rabbit.png" alt="character" />
                    </div>
                </div>
            </div>
        </TopContainer>
    )
}
