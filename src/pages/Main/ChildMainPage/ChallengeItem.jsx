import React from 'react';
import { ChallengeContainer, ChallengeImage, ChallengeProgress, ChallengeInfo } from './style'; // style.js에서 스타일을 가져옵니다.

export const ChallengeItem = ({ challenge }) => {
    const {title, imageURL, progress } = challenge;
    return (
        <div style={ChallengeContainer}>
            <div style={ChallengeImage}>
                <img src={imageURL} alt={title} style={{ maxWidth: '300px', height: 'auto', borderRadius: '8px' }} />
                <div style={ChallengeProgress}>
                    <span>{`${progress}%`}</span>
                    <div style={{ 
                        width: '100px', 
                        height: '10px', 
                        backgroundColor: '#ccc', 
                        marginLeft: '10px',
                        display: 'inline-block'
                    }}>
                        <div style={{ 
                            width: `${progress}%`, 
                            height: '100%', 
                            backgroundColor: 'lightyellow'
                        }}></div>
                    </div>
                </div>
            </div>
            <div style={{ChallengeInfo, width: '290px'}}>
                <div style={{ flex: 1, textAlign: 'left', fontSize:'16px' }}>{title}</div>
                <div style={{ flex: 1, textAlign: 'right', fontSize:'16px' }}>완료 보상금: 5000원</div>
            </div>
        </div>
    );
};

