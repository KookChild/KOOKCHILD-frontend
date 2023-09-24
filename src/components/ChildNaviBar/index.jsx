import { useState } from 'react'
import React from 'react'
import styles from './style.js'
import { useNavigate } from 'react-router-dom'

const ChildNaviBar = () => {
  const navigate = useNavigate()
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div style={styles.navBar}>
      <div style={styles.icon} onClick={() => navigate('/child')}>
        <div
          style={hoveredIcon === 'home' ? { ...styles.icon, ...styles.iconHovered } : styles.icon}
          onMouseEnter={() => setHoveredIcon('home')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => navigate('/child')}
        >
          <img src="/img/img_home.png" alt="home" width="35" height="35" />
        </div>
      </div>
      <div style={styles.icon} onClick={() => navigate('/child/reward')}>
        <div
          style={hoveredIcon === 'reward' ? { ...styles.icon, ...styles.iconHovered } : styles.icon}
          onMouseEnter={() => setHoveredIcon('reward')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => navigate('/child/reward')}
        >
          <img src="/img/img_money.png" alt="moneybag" width="40" height="40" />
        </div>
      </div>
      <div
        style={styles.icon}
        onClick={() => navigate('/child/mission/childview')}
      >
        <div
          style={hoveredIcon === 'childview' ? { ...styles.icon, ...styles.iconHovered } : styles.icon}
          onMouseEnter={() => setHoveredIcon('childview')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => navigate('/child/mission/childview')}
        >
        <img src="/img/img_checked.png" alt="checked" width="33" height="33" />
      </div>
      </div>
      <div style={styles.icon} onClick={() => navigate('/child/challenge')}>
        <div
          style={hoveredIcon === 'challenge' ? { ...styles.icon, ...styles.iconHovered } : styles.icon}
          onMouseEnter={() => setHoveredIcon('challenge')}
          onMouseLeave={() => setHoveredIcon(null)}
          onClick={() => navigate('/child/challenge')}
        >
          <img src="/img/img_rocket.png" alt="rocket" width="33" height="33" />
        </div>
        </div>
      </div>
      )
}

      export default ChildNaviBar
