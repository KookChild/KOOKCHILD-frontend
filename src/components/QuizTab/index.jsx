import { DailyQuizButton, LeftSection, MiddleSection, RightSection, CompletedMessage } from './style';
import { BsCheck } from 'react-icons/bs'
import { AiFillDollarCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const QuizTab = ({ data }) => {
    const navigate = useNavigate()
    const handleQuizTapClick = () => {
        if (!data.correct) {
            navigate(`/quiz/${data.id}`);
        }
    };
    return (
        <DailyQuizButton isCompleted={data.solved} onClick={handleQuizTapClick}>
            {data.solved && <CompletedMessage>이미 푼 퀴즈입니다.</CompletedMessage>}
            <LeftSection isCorrect={data.correct}>
                <BsCheck className='checkIcon' />
            </LeftSection>
            <MiddleSection>
                <h3 className='title'>{data.title}</h3>
            </MiddleSection>
            <RightSection>
                <p>보상금<br/> {`${data.totalReward}원`}</p>
            </RightSection>
        </DailyQuizButton>
    );
};