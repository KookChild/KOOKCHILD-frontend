import React, { useState } from 'react';
import { MissionInfoContainer, StyledInput, StyledTextArea, MissionDetail, MissionHeader, MissionBody } from './style';

export const MissionInfo = ({ title: initialTitle, content: initialContent, reward: initialAmount, endDate: initialDueDate, readOnly, onUpdate }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [reward, setAmount] = useState(initialAmount);
    const [endDate, setDueDate] = useState(initialDueDate);

    const formatReward = (reward) => {
        const parsedReward = parseInt(reward, 10);
        if (isNaN(parsedReward)) return reward;
        return new Intl.NumberFormat('ko-KR').format(parsedReward);
    };

    const updateField = (fieldName, value) => {
        if (onUpdate) {
            onUpdate({ [fieldName]: value });
        }
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        updateField('title', newTitle);
    }

    const handleContentChange = (e) => {
        const newContent = e.target.value;
        setContent(newContent);
        updateField('content', newContent);
    }

    const handleRewardChange = (e) => {
        const newReward = e.target.value.replace(/[^0-9]/g, '');
        setAmount(newReward);
        updateField('reward', newReward);
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDueDate(newDate);
        updateField('endDate', newDate);
    }

    const formatDateToDisplay = (isoDate) => {
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분까지`;
    };

    const extractDate = (dateTimeString) => {
        if (!dateTimeString) return "";
        return dateTimeString.split('T')[0];
    };

    return (
        <MissionInfoContainer>
            {!readOnly ? (
                <>
                    <MissionDetail>
                        미션 제목
                        <StyledInput type="text" value={title} onChange={handleTitleChange} readOnly={readOnly} />
                    </MissionDetail>
                    <MissionDetail>
                        달성 기한
                        <StyledInput type="date" value={extractDate(endDate)} onChange={handleDateChange} readOnly={readOnly} />
                    </MissionDetail>
                    <MissionDetail>
                        미션 내용
                        <StyledTextArea value={content} onChange={handleContentChange} readOnly={readOnly}></StyledTextArea>
                    </MissionDetail>
                    <MissionDetail>
                        미션 금액
                        <StyledInput type="text" value={formatReward(reward)} onChange={handleRewardChange} readOnly={readOnly} />
                    </MissionDetail>
                </>
            ) : (
                <>
                    <MissionDetail>
                        <MissionHeader>달성 기한</MissionHeader>
                        <MissionBody>{formatDateToDisplay(endDate)}</MissionBody>
                    </MissionDetail>
                    <MissionDetail>
                        <MissionHeader>미션 상세</MissionHeader>
                        <MissionBody>{content}</MissionBody>
                    </MissionDetail>
                </>
            )}
        </MissionInfoContainer>
    );
}