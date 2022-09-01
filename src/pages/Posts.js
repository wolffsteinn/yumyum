import React, { useState } from "react";
import { database } from "../../src/Firebase";
import { useEffect } from "react";
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
const REVIEW_FOLDER_NAME = "review";
let items = [];

const Posts = () => {
  const [childKey, setChildKey] = useState("");
  const [childData, setChildData] = useState("");

  useEffect(() => {
    const reviewRef = databaseRef(database, REVIEW_FOLDER_NAME);

    onValue(reviewRef, (snapshot) => {
      snapshot.forEach((child) => {
        setChildKey(child.key);
        setChildData(child.val());
        items = Object.values(childData);
      });
    });
    console.log(reviewRef);
  }, [childKey]);

  return (
    <>
      {items?.map(
        ({
          DishName,
          imageLink,
          storeName,
          review,
          satisfactionRating,
          valueRating,
        }) => (
          <Card key={imageLink} sx={{ maxWidth: 500, marginBottom: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={imageLink}
              alt={DishName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {childKey}
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
