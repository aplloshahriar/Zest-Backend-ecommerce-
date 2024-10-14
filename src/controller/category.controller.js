const Category = require("../models/category.model");

// // function to create a new category
const createCategory = async(req,res)=>{
try{
    // destructure name from body
const {name}= req.body;

   
    // create a new category and save it to the database
const category=new Category({name})
await category.save();
res.status(201).json(category);
}

catch(error){
    res.status(400).json({message: error.message})
}
}

// Function to get all categories
const getAllCategories = async (req, res) => {
    try {
      // find all categories from the database
      const categories = await Category.find();
  
      // return categories as JSON response
      res.json(categories);
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Function to update a category by ID
  const updateCategoryById = async (req, res) => {
    try {
      // desctructure name from request body and convert it to slug
      const { name } = req.body;
    //   const slug = toSlug(name);
  
      // find category by ID from the database
      const category = await Category.findById(req.params.id);
  
      // check if category exists
      if (!category) {
        // return error message if category not found 
        return res.status(404).json({ message: 'Category not found' });
      }
  
      // ppdate category name and slug, then save it to the database
      category.name = name;
    //   category.slug = slug;
      await category.save();
  
      // return the updated category as JSON response
      res.json(category);
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // function to delete a category by ID
const deleteCategoryById = async (req, res) => {
    try {
      // find category by ID from the database
      const category = await Category.findById(req.params.id);
  
      // check if category exists
      if (!category) {
        // return error message if category not found with status code 404
        return res.status(404).json({ message: 'Category not found' });
      }
  
      // delete the category from the database
      await category.deleteOne();
  
      // return success message as JSON response
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      // handle error if any and return error message with status code 500
      res.status(500).json({ message: error.message });
    }
  };
  
// export  controller functions
module.exports={
createCategory,
getAllCategories,
updateCategoryById,
deleteCategoryById,
}