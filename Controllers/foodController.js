import { FoodModel } from "../food_app_backend-master/models/food.js";

//fetch all foods
const getAllFoods = async (req, res) => {
    try {
        const foodList = await FoodModel.find({});
        return res.json(foodList);
    } catch (error) {
        console.log("Something went wrong: ", error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    }
}

//fetch all foods by id
const getAllFoodsByCategory = async (req, res) => {
    try {
        const foodList = await FoodModel.find({category: req.params.categoryId});
        return res.json(foodList);
    } catch (error) {
        console.log("Something went wrong: ", error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    }
}


//create a new food
const createFood = async (req, res) => {
    try {
        const newFood = await FoodModel.create({ ...req.body });
        return res.json(newFood);
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to create new food");
    }
}

//update food
const updateFood = async (req, res) => {
    try {
        const updatedFood = await FoodModel.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        return res.json(updatedFood);
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to update food");
    }
}

const deleteFood = async (req, res) => {
    try {
        await FoodModel.findByIdAndDelete(req.params.id);
        return res.send("food was deleted");
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to deleted food");
    }
}

export{
    getAllFoods,
    getAllFoodsByCategory,
    createFood,
    deleteFood,
    updateFood
}