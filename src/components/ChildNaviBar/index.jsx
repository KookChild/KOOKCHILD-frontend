import React from 'react';
import styles from './style.js';

const ChildNaviBar = () => {
  return (
    <div style={styles.navBar}>
      <div style={styles.icon} onClick={() => window.location.href = '/page1'}>
        Icon 1
      </div>
      <div style={styles.icon} onClick={() => window.location.href = '/page2'}>
        Icon 2
      </div>
      <div style={styles.icon} onClick={() => window.location.href = '/page3'}>
        Icon 3
      </div>
      <div style={styles.icon} onClick={() => window.location.href = '/page4'}>
        Icon 4
      </div>
    </div>
  );
};

export default ChildNaviBar;


