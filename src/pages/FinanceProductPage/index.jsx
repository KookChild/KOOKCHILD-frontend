import { TopContainer, TopNavigationBar } from '@components'
import {
    buttonSection,
    FinanceProductButton,
    buttonTextContainer,
    textLine1,
    textLine2,
    textLine1Icon,
    buttonImage  
} from './style'



export const FinanceProductPage = () => {
    return (
        <TopContainer>
        <TopNavigationBar title="자녀-부모 연계상품" />
        <div style={buttonSection}>
            <div style={FinanceProductButton}>
                <div style={buttonTextContainer}>
                    <span style={textLine1}>
                        자녀 금융교육
                        <span style={{ display: 'block', margin: '2px 0' }}></span> {/* 간격 조절 */}
                        우대 금리 예금
                        <span style={textLine1Icon}>&gt;</span>  {/* 아이콘 추가 */}
                    </span>
                    <span style={textLine2}>
                        KB국민은행 최고 연 3.0%
                        <br />
                        부모님 지급 금리 최고 연 20% 가능
                    </span>
                </div>
                <img src="image_url_here" alt="character" style={buttonImage} />  {/* 이미지 추가 */}
            </div>
                <div style={FinanceProductButton}>
                    <div style={buttonTextContainer}>
                        <span style={textLine1}>자녀 금융교육<br></br>우대 금리 예금</span>
                        <span style={textLine2}>KB국민은행 최고 연 3.0%
                            <br></br>
                            부모님 지급 금리 최고 연 20% 가능
                        </span>
                    </div>
                </div>
            </div>
        </TopContainer>
    )
}
