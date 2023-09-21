import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useParams } from 'react-router-dom';
import { TopContainer, TopNavigationBar } from '@components';
import {
    AreaTitleContainer,
    StyledTitle,
    StyledLevel,
    CharacterContainer,
    CharacterImage,
    ChatBubble,
    YouTubeButton,
    AreaFooterContainer,
    UserInput,
    AskButton,
    LoadingMessage, LoadingOverlay, LoadingText
} from './style';
import { getQuizHistoryDetail, sendQuestionToAPI } from '@apis';
import character1 from './img/Lamu.png';
import character2 from './img/RabbitG.png';
import loadingAnimation from 'src/animations/zzsDbpkm5P.json'

export const QuizHistoryDetailPage = () => {
    const { quizId } = useParams();
    const [quizDetail, setQuizDetail] = useState(null);
    const [userQuestion, setUserQuestion] = useState("");
    const [characterResponse, setCharacterResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmitQuestion = async () => {
        setIsLoading(true);
        try {
            const { answer } = await sendQuestionToAPI(userQuestion);
            setCharacterResponse(answer);
        } catch (error) {
            console.error("Error fetching the character's response", error);
        } finally {
            setIsLoading(false);
        }
    };



    const hasJongseong = (char) => {
        const code = char.charCodeAt(0);
        if (code < 0xAC00 || code > 0xD7A3) return false;
        return (code - 0xAC00) % 28 !== 0;
    };

    const getSuffix = (word) => {
        const lastChar = word[word.length - 1];
        return hasJongseong(lastChar) ? "이란?" : "란?";
    };

    const getSuffixForQuestion = (word) => {
        const lastChar = word[word.length - 1];
        return hasJongseong(lastChar) ? "이" : "가";
    };

    const handleButtonClick = () => {
        const baseURL = "https://www.youtube.com/results?search_query=";
        const query = `${quizDetail.answer}관련 어린이 금융`;
        const encodedQuery = encodeURIComponent(query);
        window.location.href = baseURL + encodedQuery;
    };


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
    // if (isLoading) {
    //     return (
    //         <LoadingOverlay>
    //         <LoadingMessage>
    //             <Lottie
    //                 animationData={loadingAnimation}
    //                 style={{ width: "200px", height: "300px" }}
    //             />
    //             <LoadingText>미션 생성 중입니다</LoadingText>
    //         </LoadingMessage>
    //     </LoadingOverlay>
    //         )
    // }

    return (
        <TopContainer>
            <TopNavigationBar title={'퀴즈 상세 페이지'} />
            <AreaTitleContainer>
                <StyledLevel>{`LEVEL ${quizDetail.level}`}</StyledLevel>
                <StyledTitle>Q. {quizDetail.answer}{getSuffix(quizDetail.answer)}</StyledTitle>
            </AreaTitleContainer>
            <CharacterContainer delay="0s"> {/* First Character */}
                <CharacterImage className="firstImage" src={character1} alt="첫번째 캐릭터" />
                <ChatBubble>{`${quizDetail.answer}${getSuffixForQuestion(quizDetail.answer)} 뭔가요?`}</ChatBubble>
            </CharacterContainer>

            <CharacterContainer delay="1s" className='secondContainer'>
                <ChatBubble className="secondBubble">{`${quizDetail.answer}에 대해서 설명해드릴게요! ${quizDetail.explanation}`}<br /> 혹시 더 궁금한 점이 있나요?</ChatBubble>
                <CharacterImage className="secondImage" src={character2} alt="두번째 캐릭터" />
            </CharacterContainer>

            <CharacterContainer className="leftAligned" delay="2s">
                <UserInput value={userQuestion} onChange={e => setUserQuestion(e.target.value)} placeholder="여기에 질문을 작성해주세요." />
                <AskButton onClick={handleSubmitQuestion}>질문</AskButton>
            </CharacterContainer>

            {characterResponse && (
                <CharacterContainer delay="1s" className='secondContainer'>
                    <ChatBubble className="secondBubble">{characterResponse}</ChatBubble>
                    <CharacterImage className="secondImage" src={character2} alt="두번째 캐릭터" />
                </CharacterContainer>
            )}

            <AreaFooterContainer>
                <YouTubeButton onClick={handleButtonClick}>{`${quizDetail.answer}에 대해서 더 알고 싶다면?`}</YouTubeButton>
            </AreaFooterContainer>
            {isLoading && (
                <LoadingOverlay>
                    <LoadingMessage>
                        <Lottie
                            animationData={loadingAnimation}
                            style={{ width: "200px", height: "300px" }}
                        />
                        <LoadingText>답변을 불러오는 중입니다</LoadingText>
                    </LoadingMessage>
                </LoadingOverlay>
            )}
        </TopContainer>
    );
}
