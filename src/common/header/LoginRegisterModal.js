import React, { useState } from "react";
import Modal from "react-modal";
import { Tabs, Tab } from "@material-ui/core";

// Define the content for the Login and Register tabs
function LoginTab() {
  return (
    <div>
      <h2>Login</h2>
      {/* Add your Login form here */}
    </div>
  );
}

function RegisterTab() {
  return (
    <div>
      <h2>Register</h2>
      {/* Add your Register form here */}
    </div>
  );
}

// Define the Login/Register modal component
function LoginRegisterModal(props) {
  // Use state to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab changes
  function handleTabChange(event, newValue) {
    setActiveTab(newValue);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      contentLabel="Login/Register Modal"
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      {activeTab === 0 && <LoginTab />}
      {activeTab === 1 && <RegisterTab />}
    </Modal>
  );
}

export default LoginRegisterModal;
