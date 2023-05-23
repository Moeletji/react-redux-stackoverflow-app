import React from 'react';
import logo from '../../assets/so.png'

const Header: React.FC = () => {
  return (
    <img
      src={logo}
      alt="Stackoverflow icon"
      style={{ width: 300, display: 'block', margin: 'auto' }}
    />
  );
};

export default Header;
