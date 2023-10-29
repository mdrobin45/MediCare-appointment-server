const express = require("express");
const token = require("./routerFunctions/token");
const rootRouter = express.Router();

// Token generate
rootRouter.post("/token", async (req, res) => {
   token(req, res);
});

module.exports = rootRouter;
