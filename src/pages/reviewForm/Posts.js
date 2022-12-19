import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { database } from "../../Firebase";
import {
  Typography,
  Stack,
  Rating,
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { onValue, ref as databaseRef } from "firebase/database";

const Posts = () => {
  let childData = [];

  const readingDatabaseRef = databaseRef(database, "/review");
  onValue(readingDatabaseRef, (snapshot) => {
    const data = snapshot.val();
    for (let i in data) {
      for (let j in data[i]) {
        childData.push(data[i][j]);
      }
    }
  });

  return (
    <>
      {childData?.map(
        ({
          hawker,
          DishName,
          imageLink,
          storeName,
          review,
          satisfactionRating,
          valueRating,
        }) => (
          <Card key={uuidv4()} sx={{ maxWidth: 500, marginBottom: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={imageLink}
              alt={DishName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {hawker}
              </Typography>

              <Typography variant="h6">Store Name</Typography>
              <Typography variant="subtitle2">{storeName}</Typography>
              <Divider />

              <Typography variant="h6">Dish</Typography>
              <Typography variant="subtitle2">{DishName}</Typography>
              <Divider />

              <Typography variant="h6">Review</Typography>
              <Typography variant="subtitle2">{review}</Typography>
              <Divider />

              <Box>
                <Typography variant="h6">Ratings</Typography>
                <Stack spacing={1}>
                  <Typography variant="subtitle2">Value-for-money</Typography>
                  <Rating
                    name="half-rating"
                    value={Number(valueRating)}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="subtitle2">Satisfaction</Typography>
                  <Rating
                    name="half-rating"
                    value={Number(satisfactionRating)}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Box>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
};
export default Posts;
