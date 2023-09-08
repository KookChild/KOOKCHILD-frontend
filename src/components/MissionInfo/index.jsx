import React from 'react';
import { MissionInfoContainer, StyledInput, Label } from './style';

export const MissionInfo = ({ title: initialTitle, content: initialContent, amount: initialAmount, dueDate: initialDueDate, isSuccess, isParent, completedTime, readOnly }) => {
    const [title, setTitle] = React.useState(initialTitle);
    const [content, setContent] = React.useState(initialContent);
    const [amount, setAmount] = React.useState(initialAmount);
    const [dueDate, setDueDate] = React.useState(initialDueDate);

    return (
        <MissionInfoContainer>
            <Label>
                미션 제목
                <StyledInput type="text" value={title} onChange={e => setTitle(e.target.value)} readOnly={readOnly} />
            </Label>
            <Label>
                미션 내용
                <StyledInput type="text" value={content} onChange={e => setContent(e.target.value)} readOnly={readOnly} isContent />
            </Label>
            <Label>
                미션 금액
                <StyledInput type="text" value={amount} onChange={e => setAmount(e.target.value)} readOnly={readOnly} />
            </Label>
            <Label>
                마감 기한
                <StyledInput type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} readOnly={readOnly} />
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
