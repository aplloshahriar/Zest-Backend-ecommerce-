const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category.controller");

// create
router.post("/categories", categoryController.createCategory);
// get 
router.get("/categories", categoryController.getAllCategories);
// UPDATE 
router.put("/categories/:id", categoryController.updateCategoryById);
// delete 
router.delete("/categories/:id", categoryController.deleteCategoryById);

module.exports =  router;  
