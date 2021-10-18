// import express from the express package we just installed
import express from "express";
import { connectMongoDB } from "./food_app_backend-master/configs/db.js";
import { FoodModel } from "./food_app_backend-master/models/food.js";
import { categoryModel } from "./food_app_backend-master/models/category.js";
import {foodRoutes}from "./routes/foodRoutes.js";

import { categoryRoutes } from "./routes/categoryRoutes.js";



// create a new instance of express
const app = express();
// get the body of a request using this middleware
app.use(express.json());

//use object is for middlewar

app.use("/foods",foodRoutes);

app.use("/category",categoryRoutes);
// server should listen to this port
const port = 5006;

app.get("/", (req, res) => {
  res.send("Welcome to Foody API");
});





// start connection to MongoDB
connectMongoDB();

// start server to listen to request
app.listen(port, () => console.log("Server is up and running"));
