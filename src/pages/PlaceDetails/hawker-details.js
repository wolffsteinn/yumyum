import {
  Typography,
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
    <Card key={details.PHOTOURL} sx={{ maxWidth: 500, marginBottom: 3 }}>
      <CardMedia
        component="img"
        height="300"
        image={details.PHOTOURL}
        alt={details.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {details.Name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="subtitle1">{details.ADDRESS_MYENV}</Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button variant="outlined" size="small">
          <NavLink to={`/posts/${details.ADDRESSPOSTALCODE}`}>
            View Reviews
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default HawkerDetails;
