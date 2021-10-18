import express from 'express';
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../Controllers/categoryController.js';

const route = express.Router();

route.route("/").get(getAllCategory).post(createCategory);
route.route("/:id").patch(updateCategory).delete(deleteCategory);


// fetch all categories
route.get("/categories", getAllCategory);

// create a new category
route.post("/categories", createCategory);

// update a category by id
route.patch("/categories/:id", updateCategory);

// delete a category by id
route.delete("/categories/:id", deleteCategory);

export const categoryRoutes = route;