import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledPaper } from "./Styles";
import { useAuth } from "../Context/Context";
import { Alert, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/", { replace: true });
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Typography variant="h3">Log Out</Typography>
        </Grid>

        {error && <Alert severity="error">{error}</Alert>}

        <Grid>
          <Typography variant="subtitle1">Confirm logout?</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Log Out
          </Button>

          <Typography variant="subtitle1">
            <br></br> <Link to="/dashboard"> Cancel </Link>
          </Typography>
        </Grid>
      </StyledPaper>
    </Grid>
  );
}

export default Logout;
