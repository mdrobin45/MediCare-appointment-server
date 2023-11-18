const express = require("express");
const addNewUser = require("../controllers/users/addNewUser");
const updateUserData = require("../controllers/users/updateUserData");
const userRouter = express.Router();

// Add new user
userRouter.post("/", addNewUser);

// update user data
userRouter.patch("/:id", updateUserData);

// Export user router
module.exports = userRouter;
