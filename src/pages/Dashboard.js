import React, { useState } from "react";
import { useAuth } from "../Context/Context";
import { Alert, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";

function Dashboard() {
  const { currentUser, logout } = useAuth();
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
    <Grid container>
      <Layout>
        <Grid>
          <Grid>
            <Typography variant="subtitle1"> Dashboard</Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Typography variant="subtitle1">
              {" "}
              Email: {currentUser.email}
            </Typography>
          </Grid>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Log Out
          </Button>
        </Grid>
      </Layout>
    </Grid>
  );
}

export default Dashboard;
