const styles = {
    container: {
      paddingBottom: '50px',  // 네비게이션 바 높이만큼 여백을 줍니다.
    },
    navBar: {
      position: 'fixed',  // 화면 하단에 고정
      bottom: '0',  // 하단 정렬
      width: '100%',  // 전체 너비
      height: '50px',  // 844px 높이의 화면에서 적당한 높이로 설정 (여기서는 50px)
      backgroundColor: '#333',  // 배경색
      display: 'flex',  // Flexbox 사용
      justifyContent: 'space-around',  // 아이콘 간격 균등하게
      alignItems: 'center',  // 세로 중앙 정렬
    },
    icon: {
      color: 'white',
      cursor: 'pointer',
    },
  };
  
  export default styles;