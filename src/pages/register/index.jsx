import { Box, Text, Input, Button } from "@chakra-ui/react";
import Navbar from "../navbar";
import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <Box
        bgColor={"green"}
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <Text>User {name} successfully registered!!</Text>
      </Box>
    );
  };

  const errorMessage = () => {
    return (
      <Box
        bgColor={"red"}
        style={{
          display: error ? "" : "none",
        }}
      >
        <Text>Please enter all the fields</Text>
      </Box>
    );
  };
  return (
    <Box>
      <Navbar />
      <Box>
        <Box>
          <Text>User Registration</Text>
        </Box>

        <Box>
          {errorMessage()}
          {successMessage()}
        </Box>

        <Box>
          <Text>Name</Text>
          <Input onChange={handleName} value={name} type="text" />

          <Text>Email</Text>
          <Input onChange={handleEmail} value={email} type="email" />
          <Text>Password</Text>
          <Input onChange={handlePassword} value={password} type="password" />

          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
