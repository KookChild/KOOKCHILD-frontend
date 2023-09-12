import React, { useState } from 'react';
import { MissionInfoContainer, StyledInput, StyledTextArea, Label } from './style';


export const MissionInfo = ({ title: initialTitle, content: initialContent, reward: initialAmount, endDate: initialDueDate, isSuccess, isParent, completedTime, readOnly, onUpdate }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [reward, setAmount] = useState(initialAmount);
    const [endDate, setDueDate] = useState(initialDueDate);

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
        const newReward = e.target.value;
        setAmount(newReward);
        updateField('reward', newReward);
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDueDate(newDate);
        updateField('endDate', newDate);
    }

    const extractDate = (dateTimeString) => {
        if (!dateTimeString) return "";
        return dateTimeString.split('T')[0];
    };

    return (
        <MissionInfoContainer>
    <Label>
        미션 제목
        <StyledInput type="text" value={title} onChange={handleTitleChange} readOnly={readOnly} />
    </Label>
    <Label>
        미션 내용
        <StyledTextArea value={content} onChange={handleContentChange} readOnly={readOnly}></StyledTextArea>
    </Label>

    <Label>
        미션 금액
        <StyledInput type="text" value={reward} onChange={handleRewardChange} readOnly={readOnly} />
    </Label>
    <Label>
        마감 기한
        <StyledInput type="date" value={extractDate(endDate)}  onChange={handleDateChange} readOnly={readOnly} />
    </Label>
    {isSuccess && !isParent && (
        <Label>
            완료 시간
            <StyledInput type="text" value={completedTime} readOnly />
        </Label>
    )}
</MissionInfoContainer>

    );
};
