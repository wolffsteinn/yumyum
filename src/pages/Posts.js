import React, { useState } from "react";
import { database } from "../../src/Firebase";
import { useEffect } from "react";
import { onValue, ref as databaseRef } from "firebase/database";
const REVIEW_FOLDER_NAME = "review";

const Posts = () => {
  const [childKey, setChildKey] = useState("");
  const [childData, setChildData] = useState("");
  const [dish, setDish] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const reviewRef = databaseRef(database, REVIEW_FOLDER_NAME);

    onValue(reviewRef, (snapshot) => {
      snapshot.forEach((child) => {
        setChildKey(child.key);
        setChildData(child.val());
        const items = Object.values(childData);
        setDish(items[0].DishName);
        setImage(items[0].imageLink);

        console.log(childKey);
        console.log(childData);
        console.log(items[0].DishName);
      });
    });
  }, []);

  console.log(dish);
  return (
    <>
      <div>Reviews</div>
      <>To put in reviews here</>
      <p>Hawker Center: {childKey}</p>
      <p>Dish: {dish}</p>
      <p>image: {image}</p>
    </>
  );
};
export default Posts;
