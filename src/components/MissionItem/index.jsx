import { ItemContainer, LeftSection, MiddleSection, RightSection } from './style';

export const MissionItem = ({ missionTitle, missionReward, missionDate, parentConfirm, isEven }) => {
    return (
        <ItemContainer isEven={isEven} parentConfirm={parentConfirm}>
            <LeftSection parentConfirm={parentConfirm}>
                <div className="circle"></div>
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
