import { categoryModel } from "../food_app_backend-master/models/category.js";

//fetch all Controllers

const getAllCategory = async (req, res) => {
    try {
        const categoryList = await categoryModel.find({});
        return res.json(categoryList);
    } catch (error) {
        console.log("Something went wrong: ", error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    }
}


//fetch all Category by Id
const getAllCategoryById = async (req, res) => {
    try {
        const categoryList = await categoryModel.find({category: req.params.category});
        return res.json(categoryList);
    } catch (error) {
        console.log("Something went wrong: ", error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    }
}

//create category

const createCategory = async (req, res) => {
    try {
        const newcategory = await categoryModel.create({ ...req.body });
        return res.json(newcategory);
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to create new category");
    }
}

//update category

const updateCategory = async (req, res) => {
    try {
        const updatedcategory = await categoryModel.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        );
        return res.json(updatedcategory);
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to update category");
    }
}


//delete a category

const deleteCategory = async (req, res) => {
    try {
        await categoryModel.findByIdAndDelete(req.params.id);
        return res.send("category was deleted");
    } catch (error) {
        console.log("Something went wrong: ", error);
        res.status(400).send("Failed to deleted category");
    }
}

export{
    getAllCategory,
    getAllCategoryById,
    createCategory,
    deleteCategory,
    updateCategory
}