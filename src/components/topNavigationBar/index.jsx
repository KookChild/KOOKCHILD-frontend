import { Header, HeaderContent, HeaderImage, HeaderTitle } from './style'
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

export const TopNavigationBar = ({ title }) => {
    const navigate = useNavigate();
    const handleHeaderImageClick = () => {
        navigate(-1); // 이전 화면으로 이동
    }

    const iconSize = 20; // 원하는 아이콘 크기 (예: 24px)

    return(
        
    <Header>
        <HeaderContent>
          <HeaderImage onClick={handleHeaderImageClick}>
             <IoChevronBackOutline style={{ fontSize: iconSize }}/>
          </HeaderImage>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderContent>
    </Header>
    )
}