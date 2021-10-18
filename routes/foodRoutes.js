import express from 'express';
import { getAllCategoryById } from '../Controllers/categoryController.js';
import { createFood, deleteFood, getAllFoods, updateFood, getAllFoodsByCategory} from '../Controllers/foodController.js';

const route = express.Router();

route.route("/").get(getAllFoods).post(createFood);
route.route("/:id").patch(updateFood).delete(deleteFood);
route.route("/:categoryId").get(getAllCategoryById),

// fetch all foods
route.get("/foods", getAllFoods);

//fetch food by id
route.get("/foods/:categoryId", getAllFoodsByCategory)

// create a new food
route.post("/foods", createFood);

// update a food by id
route.patch("/foods/:id", updateFood);

// delete a food by id
route.delete("/foods/:id", deleteFood);

export const foodRoutes = route