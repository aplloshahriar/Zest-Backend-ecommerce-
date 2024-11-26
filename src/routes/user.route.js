const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/register", userController.signupController);
router.post("/signin", userController.signInController);
router.get("/user/profile", userController.getUserProfile);

module.exports =  router;  

// PORT=3000
// API=http://localhost:3000
// USER_NAME=aaronshahriaras
// PASSWORD=aaronshahriaras

// # img upload
// CLOUDINARY_NAME=dfahpdppu
// API_KEY=815936242189591
// API_SECRET=oVepSyli4Ho6dAKkyXMB5RT9wo4