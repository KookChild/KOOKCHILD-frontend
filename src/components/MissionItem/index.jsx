import { ItemContainer, LeftSection, MiddleSection, RightSection } from './style';
import { BsCheck } from 'react-icons/bs'

export const MissionItem = ({ missionTitle, missionReward, missionDate, parentConfirm, childConfirm, isEven }) => {
    return (
        <ItemContainer isEven={isEven} parentConfirm={parentConfirm}>
            <LeftSection parentConfirm={parentConfirm} childConfirm={childConfirm}>
                <BsCheck className='checkIcon'/>
            </LeftSection>
            <MiddleSection>
                <h3 className='title'>{missionTitle}</h3>
                <p className='date'>{missionDate}</p>
            </MiddleSection>
            <RightSection>
                <p>보상금<br/>{missionReward}</p>
            </RightSection>
        </ItemContainer>
    );
};
