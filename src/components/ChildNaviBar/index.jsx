import React from 'react';
import styles from './style.js';
import { useNavigate } from 'react-router-dom';


const ChildNaviBar = () => {
    
    const navigate = useNavigate();
  return (
    <div style={styles.navBar}>
      <div style={styles.icon} onClick={() => navigate('/child')}>
        Icon 1
      </div>
      <div style={styles.icon} onClick={() => navigate('/child')}>
        Icon 2
      </div>
      <div style={styles.icon} onClick={() => navigate('/child/mission/childview')}>
        Icon 3
      </div>
      <div style={styles.icon} onClick={() => navigate('/child/challenge')}>
        Icon 4
      </div>
    </div>
  );
};

export default ChildNaviBar;


