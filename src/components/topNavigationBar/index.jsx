import { Header, HeaderContent, HeaderImage, HeaderTitle } from './style'
import { useNavigate } from 'react-router-dom';
export const TopNavigationBar = ({ title }) => {
    const navigate = useNavigate();
    const handleHeaderImageClick = () => {
        navigate(-1); // 이전 화면으로 이동
    }
    return(
    <Header>
        <HeaderContent>
          <HeaderImage src={require('../../img/prefer.png')} onClick={handleHeaderImageClick} />
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderContent>
    </Header>
    )
}