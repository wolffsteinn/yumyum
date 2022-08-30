import React from "react";

import { useAuth } from "../Context/Context";
import { Grid, Typography } from "@mui/material";

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <Grid container>
      <Grid>
        <Grid>
          <Typography variant="subtitle1"> Dashboard</Typography>
          <Typography variant="subtitle1">
            {" "}
            Email: {currentUser.email}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
