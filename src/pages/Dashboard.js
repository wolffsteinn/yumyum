import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HawkerDetails from "./PlaceDetails/hawker-details";
import hawkerData from "../hawker-centres-kml.json";
import { Autocomplete, TextField } from "@mui/material";
let hawkerNames = [];

const List = () => {
  const [hawkerDetails, setHawkerDetails] = useState([]);
  const [selectedHawkerName, setSelectedHawkerName] = useState([]);

  useEffect(() => {
    setHawkerDetails(hawkerData);
  }, []);

  hawkerNames = hawkerDetails.map((hawkerName) => {
    const hawkerNameList = hawkerName.Name;
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
        onChange={(e, newValue) => setSelectedHawkerName(newValue)}
        value={selectedHawkerName}
      />

      <Grid>
        {hawkerDetails?.map((details, i) => {
          return selectedHawkerName === details.Name ? (
            <HawkerDetails key={i} details={details} />
          ) : (
            <></>
          );
        })}
      </Grid>
    </>
  );
};

export default List;
