
export const headerContainer = {
    backgroundColor: '#F6F6FF',
    width: '360px',
    height: '1600px',
    margin: 'auto',
    padding: '16px',
    boxSizing: 'border-box'
};

export const iconContainer = {
    display: 'flex',
    justifyContent: 'space-between',  // 오른쪽 정렬
    marginTop: '20px',  // 아이콘 위의 간격
    marginRight: '16px', // 아이콘 오른쪽 간격
    marginBottom: '12px',
    gap: '16px'  // 아이콘 사이의 간격
};

export const UserNameContatiner = {
    display: 'flex',
    justifyContent: 'space-between',  // 오른쪽 정렬
    marginTop: '20px',  // 아이콘 위의 간격
    marginLeft: '8px', // 아이콘 오른쪽 간격
    marginBottom: '12px',
    gap: '16px'  // 아이콘 사이의 간격
};


export const textContainer = {
    marginLeft: '12px', // 텍스트 왼쪽에 여백 추가
    display: 'flex',
    justifyContent: 'space-between', // 오른쪽 정렬을 위한 스타일
};

export const textContainerSpan = {
    marginTop: '7px', // 텍스트 위의 간격
    marginRight: '12px', 
    fontSize: '8px', 
};

// 우측 상단 아이콘
export const iconGroup = {
    marginTop: '10px', // 아이콘 위의 간격
    display: 'flex',
    gap: '16px', // 아이콘 사이의 간격
};

// 버튼 공통
export const buttonSection = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '2px',
    marginBottom: '5px'
};

export const MyAccountButton = {
    position: 'relative',
    backgroundColor: '#ffffff',
    flex: 1,
    padding: '38px 20px', // 세로 길이를 조절
    margin: '8px',
    borderRadius: '8px', // 모서리 라운딩
    border: '1px solid #ccc', // 테두리 없앰
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 효과
};

// MyAccountButton 내부 버튼
    export const CustomLinkButton = {
        backgroundColor: '#FFCC00 ',
        color: '#000', 
        padding: '10px 20px', 
        borderRadius: '8px',
        marginLeft: '10px',
        textAlign: 'center',
        fontSize: '14px',
        textDecoration: 'none', 
        display: 'inline-block', 
        boxShadow: '0px 2px 4px #00000029'
    };

export const DailyQuizButton = {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: '30px 20px', // 세로 길이를 조절
    margin: '8px',
    borderRadius: '8px', // 모서리 라운딩
    border: '1px solid #ccc', // 테두리 없앰
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 효과
};

export const StyledCurrentMissionList = ({ missions }) => {
    return (
        <div style={missionListContainer}>
            {missions.map((mission, index) => (
                <div key={index} style={missionContainer}>
                    <div style={missionInfo}>
                        <div style={missionTitle}>{mission.title}</div>
                        <div style={missionDetail}>{mission.detail}</div>
                    </div>
                    <div style={rewardContainer}>
                        <span style={rewardText}>보상금<br></br>{`${mission.reward}원`}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Styles related to the CurrentMissionList component
const missionListContainer = {
    // Add your container styles here
    backgroundColor: '#ffffff',
    flex: 1,
    padding: '30px 20px', // 세로 길이를 조절
    margin: '8px',
    borderRadius: '8px', // 모서리 라운딩
    border: '1px solid #ccc', // 테두리 없앰
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 효과
};

const missionContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "10px"
};

const missionInfo = {
    flex: 1,
};

const missionTitle = {
    fontSize: "16px",
    fontWeight: "bold",
};

const missionDetail = {
    fontSize: "14px",
};

const rewardContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5"
};

const rewardText = {
    fontSize: "14px",
};




export const ChallengeItem = ({ challenge }) => {
    const { title, imageURL, progress } = challenge;

    return (
        <div style={{
            ...buttonSection,
            position: "relative",
            margin: "10px",
            flex: 1,
            padding: '30px 20px', // 세로 길이를 조절
            borderRadius: '8px', // 모서리 라운딩
            border: '1px solid #ccc', // 테두리 없앰
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // 그림자 효과
        }}>
            <img src={imageURL} alt={title} width="300" height="200" />
            <div style={{
                position: "absolute",
                top: "0",
                right: "0",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "5px"
            }}>
                <span>{progress}%</span>
            </div>
        </div>
    );
};


export const StyledCurrentChallengesList = ({ challenges }) => {
    return (
        <div style={{ ...buttonSection, flexDirection: "column" }}>
            {challenges.map((challenge) => (
                <ChallengeItem key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
};



export const ChallengeContainer = {
    display: 'flex',
    margin:'10px',
    flexDirection: 'column', // 컨테이너 방향을 세로로 변경
    marginBottom: '20px', // 각 챌린지 아이템 아래에 마진 추가
    alignItems: 'center', // 아이템을 세로 중앙에 배치
    border: '1px solid #ccc',
    borderRadius: '12px', // 둥근 모서리
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자
    padding: '6px', // 내부 여백
    width: '300px', // 너비
};


export const ChallengeImage = {
    position: 'relative',
};

export const ChallengeProgress = {
    position: 'absolute',
    bottom: '10px', 
    left: '10px',  
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
};

export const ChallengeInfo = {
    display: 'flex',
    justifyContent: 'space-between',
};


////////////////////////////////////////////////

export const BackToKBStarBankingButton = {
    backgroundColor: '#ffffff',
    flex: 0.4,
    padding: '10px 10px', // 세로 길이를 조절
    marginTop: '22px',
    borderRadius: '8px', // 모서리 라운딩
    border: '1px solid #ccc',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
    whiteSpace: 'normal',
    width: '200px'
};