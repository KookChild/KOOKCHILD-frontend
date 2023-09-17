import { ItemContainer, LeftSection, MiddleSection, RightSection, ChildItemContainer, ChildLeftSection, ChildRightSection, ChildUnderSection } from './style';
import { BsCheck } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'

export const MissionItem = ({ missionTitle, missionReward, missionDate, parentConfirm, childConfirm, parent, even }) => {
    if (parent) {
        return (
            <ItemContainer even={even} parentConfirm={parentConfirm}>
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
    } else {
        return (
            <ChildItemContainer even={even} parentConfirm={parentConfirm}>
            <ChildLeftSection parentConfirm={parentConfirm} childConfirm={childConfirm}>
                <BsCheck className='checkIcon'/>
            </ChildLeftSection>
            <ChildRightSection>
                <h3 className='title'>{missionTitle}</h3>
                <p className='date'>{missionDate}</p>
            </ChildRightSection>
            <ChildUnderSection>
            <p> <AiFillDollarCircle className='moneyIcon' /> 미션 보상금 <span>{missionReward}</span></p>
            </ChildUnderSection>
        </ChildItemContainer>
        );
    }
};
