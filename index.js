const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
const cloudinary=require("cloudinary");

// ROUTES
const userRoutes = require("./src/routes/user.route");
const categoryRoutes = require("./src/routes/category.route");

const app = express();
env.config();

// database
mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@ecommerce-databse.figbt.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("databse connected");
  })
  .catch((error) => {
    console.log("database connection error:", error);
  });

  // cloudinariy
  cloudinary.config({
    cloud_name:`${process.env.CLOUDINARY_NAME}`,
    api_key:`${process.env.API_KEY}`,
    api_secret:`${process.env.API_SECRET}`
  });

// express js
app.use(cors());
app.use(express.json());


// api
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
// console.log(mongoose.Schema.Types.ObjectId);

// port
app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
