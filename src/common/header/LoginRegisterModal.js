import React, { useState } from "react";
import Modal from "react-modal";
import { Tabs, Tab } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "block",
    textAlign: "center",
  },
}));

// Define the content for the Login and Register tabs
function LoginTab() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <ValidatorForm onSubmit={handleLogin}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="username-input">Username*</InputLabel>
            <TextValidator
              id="username-input"
              name="username"
              value={username}
              onChange={handleEmailChange}
              validators={["required", "isEmail"]}
              errorMessages={["Email is required", "Email is not valid"]}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <TextValidator
              id="password-input"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              validators={["required"]}
              errorMessages={["Password is required"]}
            />
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </ValidatorForm>
    </div>
  );
}


function RegisterTab() {
    const classes = useStyles();
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

  
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleContactNumberChange = (event) => {
      setContactNumber(event.target.value);
    };
  
    const handleRegister = () => {
      // Handle registration logic here

      setIsRegistered(true);
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ValidatorForm onSubmit={handleRegister}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="first-name-input">First Name*</InputLabel>
            <TextValidator
              id="first-name-input"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              validators={["required"]}
              errorMessages={["First Name is required"]}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="last-name-input">Last Name*</InputLabel>
            <TextValidator
              id="last-name-input"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              validators={["required"]}
              errorMessages={["Last Name is required"]}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="email-input">Email*</InputLabel>
            <TextValidator
              id="email-input"
              name="email"
              value={email}
              onChange={handleEmailChange}
              validators={["required", "isEmail"]}
              errorMessages={["Email is required", "Email is not valid"]}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="password-input">Password*</InputLabel>
            <TextValidator
              id="password-input"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              validators={["required"]}
              errorMessages={["Password is required"]}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="contact-number-input">Contact Number*</InputLabel>
            <TextValidator
              id="contact-number-input"
              name="contactNumber"
              value={contactNumber}
              onChange={handleContactNumberChange}
              validators={["required"]}
              errorMessages={["Contact Number is required"]}
            />
          </FormControl>
          {isRegistered && <p>Registration Successful. Please Login!</p>}
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </ValidatorForm>
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
