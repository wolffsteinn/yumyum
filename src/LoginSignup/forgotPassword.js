import React, { useState, useRef } from "react";
import { StyledPaper } from "./Styles";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "../Context/Context";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await passwordReset(emailRef.current.value);
      setMessage("Check Inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Typography variant="h3">Reset Password</Typography>
        </Grid>

        {error && <Alert severity="error">{error}</Alert>}
        {!error && message && <Alert severity="success">{message}</Alert>}

        <Grid>
          <form onSubmit={handleSignUpSubmit}>
            <Typography variant="subtitle1">Email</Typography>
            <TextField fullWidth type="email" inputRef={emailRef} />

            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color={{ loading } ? "primary" : "secondary"}
            >
              Reset Password
            </Button>
          </form>

          <Typography variant="subtitle1">
            <br></br> <Link to="/"> Log In </Link>
          </Typography>

          <Typography variant="subtitle1">
            No existing account? <br></br>{" "}
            <Link to="/signup"> Create Account Now </Link>
          </Typography>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default ResetPassword;
