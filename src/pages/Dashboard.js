import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import HawkerDetails from "../PlaceDetails/hawker-details";

import { Autocomplete, TextField } from "@mui/material";
let hawkerNames = [];

const List = () => {
  const [hawkerDetails, setHawkerDetails] = useState([]);
  const [hawkerName, setHawkerName] = useState([]);

  console.log({ hawkerName, hawkerDetails });

  useEffect(() => {
    axios
      .get(
        "https://data.gov.sg/api/action/datastore_search?resource_id=b80cb643-a732-480d-86b5-e03957bc82aa"
      )
      .then((response) => setHawkerDetails(response.data.result.records))
      .catch((err) => console.log(err));
  }, []);

  hawkerNames = hawkerDetails.map((hawkerName) => {
    const hawkerNameList = hawkerName.name;
    return hawkerNameList;
  });

  return (
    <>
      <Autocomplete
        disablePortal
        sx={{ width: 600 }}
        options={hawkerNames}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Hawker Name"
            placeholder="Hawker Center Name"
          />
        )}
        onChange={(e, newValue) => setHawkerName(newValue)}
        value={hawkerName}
      />

      <Grid>
        {hawkerDetails?.map((details, i) => {
          return hawkerName === details.name ? (
            <HawkerDetails details={details} />
          ) : (
            <></>
          );
        })}
      </Grid>
    </>
  );
};

export default List;
