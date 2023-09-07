import { ItemContainer, LeftSection, RightSection } from './style';

export const MissionItem = ({ missionTitle, missionReward, missionDate, parentConfirm }) => {
    return (
        <ItemContainer>
            <LeftSection>
                <h3>{missionTitle}</h3>
            </LeftSection>
            <RightSection>
                <p>금액: {missionReward}</p>
                <p>기한: {missionDate}</p>
            </RightSection>
        </ItemContainer>
    );
};