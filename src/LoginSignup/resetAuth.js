import React, { useState, useRef } from "react";
import { StyledPaper } from "./Styles";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const ResetProfile = () => {
  const { currentUser, resetEmail, resetPassword } = useAuth();
  const newEmailRef = useRef();
  const newPasswordRef = useRef();
  const passwordCfmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    if (newPasswordRef.current.value !== passwordCfmRef.current.value) {
      return setError("Passwords do not match");
    }

    let promises = [];
    setError("");
    setLoading(true);

    if (newEmailRef.current.value !== currentUser.email) {
      promises.push(resetEmail(newEmailRef.current.value));
    }
    if (newPasswordRef.current.value) {
      promises.push(resetPassword(newPasswordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Typography variant="h3">Reset Password</Typography>
        </Grid>

        {!error && loading && (
          <Alert severity="success">Reset Password Success!</Alert>
        )}
        {error && <Alert severity="error">{error}</Alert>}

        <Grid>
          <form onSubmit={handleSignUpSubmit}>
            <Typography variant="subtitle1">Email</Typography>
            <TextField
              fullWidth
              type="email"
              inputRef={newEmailRef}
              defaultValue={currentUser.email}
            />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              fullWidth
              type="password"
              inputRef={newPasswordRef}
              autoComplete="on"
              placeholder="Leave blank if not changing password"
            />
            <Typography variant="subtitle1">Password Confirmation</Typography>
            <TextField
              fullWidth
              type="password"
              inputRef={passwordCfmRef}
              autoComplete="on"
              placeholder="Leave blank if not changing password"
            />

            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color={{ loading } ? "primary" : "secondary"}
            >
              Reset
            </Button>
          </form>

          <Typography variant="subtitle1">
            <Link to="/dashboard"> Cancel </Link>
          </Typography>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default ResetProfile;
