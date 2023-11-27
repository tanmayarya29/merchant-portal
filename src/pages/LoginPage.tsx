import React, { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        maxWidth: "500px",
        padding: "20px",
        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.4)",
        borderRadius: "6px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
        }}
      >
        Login Page
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </Stack>
  );
};

export default LoginPage;
