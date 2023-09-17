import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TopContainer, TopNavigationBar } from '@components';
import {
    AreaTitleContainer,
    StyledTitle,
    StyledLevel,
    CharacterContainer,
    CharacterImage,
    ChatBubble,
} from './style';
import { getQuizHistoryDetail } from '@apis';
import character1 from './img/Lamu.png';
import character2 from './img/RabbitG.png';

export const QuizHistoryDetailPage = () => {
    const { quizId } = useParams();
    const [quizDetail, setQuizDetail] = useState(null);

    useEffect(() => {
        const fetchQuizDetail = async () => {
            try {
                const data = await getQuizHistoryDetail(quizId);
                setQuizDetail(data);
            } catch (error) {
                console.error("Error fetching the quiz detail", error);
            }
        };
        fetchQuizDetail();
    }, [quizId]);

    if (!quizDetail) return <p>Loading...</p>;

    return (
        <TopContainer>
            <TopNavigationBar title={'퀴즈 상세 페이지'} />
            <AreaTitleContainer>
            <StyledLevel>{`LEVEL ${quizDetail.level}`}</StyledLevel>
          <StyledTitle>Q. {quizDetail.answer}이란 무엇인가요?</StyledTitle>
        </AreaTitleContainer>
            <CharacterContainer delay="0s">
                <CharacterImage src={character1} alt="첫번째 캐릭터" />
                <ChatBubble>{`${quizDetail.answer}이 뭔가요?`}</ChatBubble>
            </CharacterContainer>
            <CharacterContainer delay="1s">  {/* 두번째 컨테이너 애니메이션 지연 */}
                <ChatBubble>{`${quizDetail.answer}에 대해서 설명해드릴게요! ${quizDetail.explanation}`}</ChatBubble>
                <CharacterImage src={character2} alt="두번째 캐릭터" />
            </CharacterContainer>
        </TopContainer>
    );
}
