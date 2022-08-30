import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import HawkerDetails from "../PlaceDetails/hawker-details";

const List = () => {
  const [hawkerDetails, setHawkerDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://data.gov.sg/api/action/datastore_search?resource_id=b80cb643-a732-480d-86b5-e03957bc82aa"
      )
      .then((response) => setHawkerDetails(response.data.result.records))
      .catch((err) => console.log(err));
  }, []);

  console.log(hawkerDetails);

  return (
    <Grid>
      {hawkerDetails?.map((details, i) => (
        <Grid key={i}>
          <HawkerDetails details={details} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
