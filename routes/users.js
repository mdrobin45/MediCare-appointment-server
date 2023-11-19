const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const updateUserData = require("../controllers/users/updateUserData");
const getSingleUser = require("../controllers/users/getSingleUser");
const userRouter = express.Router();

// Get single user
userRouter.get("/", getSingleUser);

// Add new user
userRouter.post("/", addNewUser);

// update user data
userRouter.patch("/:id", updateUserData);

// Export user router
module.exports = userRouter;
