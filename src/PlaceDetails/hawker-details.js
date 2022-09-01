import {
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HawkerDetails = ({ details }) => {
  return (
    <Card sx={{ maxWidth: 500, marginBottom: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={details.photourl}
        alt={details.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {details.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="subtitle1">{details.address_myenv}</Typography>
        </Box>
        <Grid>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Q1 Cleaning Dates</Typography>
            <Typography variant="subtitle1">
              {details.q1_cleaningstartdate} to {details.q1_cleaningenddate}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Q2 Cleaning Dates</Typography>
            <Typography variant="subtitle1">
              {details.q2_cleaningstartdate} to {details.q2_cleaningenddate}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Q3 Cleaning Dates</Typography>
            <Typography variant="subtitle1">
              {details.q3_cleaningstartdate} to {details.q3_cleaningenddate}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Q4 Cleaning Dates</Typography>
            <Typography variant="subtitle1">
              {details.q4_cleaningstartdate} to {details.q4_cleaningenddate}
            </Typography>
          </Box>
        </Grid>
      </CardContent>

      <CardActions>
        <Button variant="outlined" size="small">
          <NavLink to={`/posts/${details.name}`} exact>
            View Reviews
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default HawkerDetails;
