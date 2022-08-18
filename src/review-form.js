import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { StyledPaper } from "./styles";
import { database, storage } from "./firebase";
import { ref, onChildAdded, push, set } from "firebase/database";
import {
  getDownloadURL,
  uploadBytes,
  ref as storageRef,
} from "firebase/storage";

const REVIEW_FOLDER_NAME = "reviewHawker";
const IMG_FOLDER_NAME = "reviewImages";
let postingRef = {};
const hawkerplaces = [
  { hawkerId: "bedok 85" },
  { hawkerId: "tampines st 11" },
  { hawkerId: "bendemeer food center" },
  { hawkerId: "seah im hawker center" },
];

const ReviewForm = () => {
  const [valueRating, setValueRating] = useState(2.5);
  const [satisfactionRating, setSatisfactionRating] = useState(2.5);
  const [posts, setPosts] = useState([]);
  const [fileInputFile, setFileInputFile] = useState(null);
  const [fileInputValue, setFileInputValue] = useState("");
  const [hawker, setHawker] = useState("");
  const [storeName, setStoreName] = useState("");
  const [dishName, setDishName] = useState("");
  const [review, setReview] = useState("");

  useEffect(() => {
    const reviewPostingRef = ref(database, REVIEW_FOLDER_NAME);
    onChildAdded(reviewPostingRef, (data) => {
      setPosts([...posts, { key: data.key, val: data.val() }]);
    });
  }, []);

  const handleValueRatingChange = (e) => {
    e.preventDefault();
    setValueRating(e.target.value);
  };

  const handleSatisfactionRatingChange = (e) => {
    e.preventDefault();
    setSatisfactionRating(e.target.value);
  };

  const handleHakwerNameChange = (e) => {
    setHawker(e.target.value);
  };

  const handleStoreNameChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleDishNameChange = (e) => {
    setDishName(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleFileInputChange = (e) => {
    setFileInputFile(e.target.files[0]);
    setFileInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imgFileRef = storageRef(
      storage,
      `${IMG_FOLDER_NAME}/${fileInputFile.name}`
    );

    const hawkerList = hawkerplaces.map((hawker) => {
      return hawker.hawkerId;
    });

    uploadBytes(imgFileRef, fileInputFile).then(() => {
      getDownloadURL(imgFileRef).then((downloadURL) => {
        for (let i = 0; i < hawkerList.length; i += 1) {
          postingRef = ref(database, `${REVIEW_FOLDER_NAME}/${hawkerList[i]}`);
          const newPostingRef = push(postingRef);
          if (hawker === postingRef._path.pieces_[1]) {
            set(newPostingRef, {
              imageLink: downloadURL,
              review: review,
              storeName: storeName,
              DishName: dishName,
              valueRating: valueRating,
              satisfactionRating: satisfactionRating,
            });
          }
        }

        setReview("");
        setDishName("");
        setStoreName("");
        setHawker("");
        setFileInputValue("");
        setFileInputFile(null);
        setSatisfactionRating(2.5);
        setValueRating(2.5);
      });
    });
  };

  return (
    <Grid>
      <StyledPaper elevation={10}>
        <Grid align="center">
          <Avatar></Avatar>
          <h1>Reviewing!</h1>
          <Typography variant="subtitle1">Give your honest review!</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          {/* change hawker to a combo box */}
          <TextField
            fullWidth
            label="HawkerName"
            value={hawker}
            placeholder="Hawker Center Name"
            onChange={handleHakwerNameChange}
          />
          <TextField
            fullWidth
            label="Store Name"
            value={storeName}
            placeholder="Be as accurate as possible!"
            onChange={handleStoreNameChange}
          />
          <TextField
            fullWidth
            label="Dish Name"
            value={dishName}
            placeholder="Be as detailed as possible!"
            onChange={handleDishNameChange}
          />
          <TextField
            fullWidth
            type="file"
            value={fileInputValue}
            onChange={handleFileInputChange}
          />
          <TextField
            fullWidth
            label="Review"
            value={review}
            multiline
            rows={4}
            placeholder="Your honest review here!"
            onChange={handleReviewChange}
          />
          <br />
          <Box>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Value-for-money</Typography>
              <Rating
                name="half-rating"
                value={Number(valueRating)}
                precision={0.5}
                onChange={handleValueRatingChange}
              />
              <Typography variant="subtitle2">Satisfaction</Typography>
              <Rating
                name="half-rating"
                value={Number(satisfactionRating)}
                precision={0.5}
                onChange={handleSatisfactionRatingChange}
              />
            </Stack>
          </Box>
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </StyledPaper>
    </Grid>
  );
};

export default ReviewForm;
