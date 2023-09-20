const styles = {
  navBar: {
    bottom: '0px',
    width: '100%',
    height: '70px',
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0px -6px 5px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    display: 'flex',
    color: 'white',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.1s ease-in-out',
  },
  iconHovered: { // new style for hover effect
    transform: 'scale(1.1)'
  }
}

export default styles
