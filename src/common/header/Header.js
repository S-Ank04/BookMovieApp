import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import LoginRegisterModal from "./LoginRegisterModal";

import './Header.css';

function Header({isAuthenticated}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleLoginClick() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    <div className="header">
     
      <img src={logo} alt="Logo" className="logo" />
      <div className="logoAndImage">
        {isAuthenticated ? (
          <Button variant="contained" color="default" >
            Logout
          </Button>
        ) : (
          <Button variant="contained" color="default" onClick={handleLoginClick}>
            Login
          </Button>
        )}
        <LoginRegisterModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
      />
      </div>
      </div>
  );
}

export default Header;
