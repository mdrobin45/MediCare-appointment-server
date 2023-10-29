const express = require("express");
const generateToken = require("../controllers/token/generateToken");
const rootRouter = express.Router();

// Root
rootRouter.get("/", (req, res) => {
   res.send("Server running");
});

// Token generate
rootRouter.post("/token", generateToken);

module.exports = rootRouter;
