import React from 'react';
import styles from './style.js';
import { useNavigate } from 'react-router-dom';



const ChildNaviBar = () => {
  const navigate = useNavigate()
  return (
    <div style={styles.navBar}>
      <div style={styles.icon} onClick={() => navigate('/child')}>
        <img src="/img/img_home.png" alt="home" width="35" height="35" />
      </div>
      <div style={styles.icon} onClick={() => navigate('/child')}>
        <img src="/img/img_money.png" alt="moneybag" width="40" height="40" />
      </div>
      <div
        style={styles.icon}
        onClick={() => navigate('/child/mission/childview')}
      >
        <img src="/img/img_checked.png" alt="checked" width="33" height="33" />
      </div>
      <div style={styles.icon} onClick={() => navigate('/child/challenge')}>
        <img src="/img/img_rocket.png" alt="rocket" width="33" height="33" />
      </div>
    </div>
  )
}

export default ChildNaviBar
