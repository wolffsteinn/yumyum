import React, { useState, useRef } from "react";
import { StyledPaper } from "./Styles";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard", { replace: true });
    } catch {
      setError("Failed to create login");
    }

    setLoading(false);
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Typography variant="h3">Log In here</Typography>
        </Grid>

        {error && <Alert severity="error">{error}</Alert>}

        <Grid>
          <form onSubmit={handleSignUpSubmit}>
            <Typography variant="subtitle1">Email</Typography>
            <TextField fullWidth type="email" inputRef={emailRef} />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              fullWidth
              type="password"
              inputRef={passwordRef}
              autoComplete="on"
            />

            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color={{ loading } ? "primary" : "secondary"}
            >
              Log In
            </Button>
          </form>

          <Grid display="flex" justifyContent="space-around">
            <Typography variant="subtitle1">
              No existing account? <br></br>{" "}
              <Link to="/signup"> Create Account Now </Link>
            </Typography>
            <Typography variant="subtitle1">
              Forgot Password? <br></br>{" "}
              <Link to="/forgot-pw"> Reset Password </Link>
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default Login;
