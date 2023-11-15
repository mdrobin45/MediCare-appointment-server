const express = require("express");
const generateToken = require("../controllers/token/generateToken");
const clearToken = require("../controllers/token/clearToken");
const rootRouter = express.Router();

// Root
rootRouter.get("/", (req, res) => {
   res.send("Server running");
});

// Token generate
rootRouter.post("/token", generateToken);

// Logout and remove token
rootRouter.post("/logout", clearToken);

module.exports = rootRouter;
