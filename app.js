const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const rootRouter = require("./Routers/root");
const doctorsRouter = require("./Routers/doctors");
const specialityRouter = require("./Routers/specialities");
require("dotenv").config();

// Use middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET_SIGN));

// Database connection
const connect = async () => {
   try {
      await mongoose.connect(`${process.env.MONGO_URI}`);
      console.log("Database connection successful!");
   } catch {
      console.log("Database connection error!");
   }
};
connect();

// application router
app.use("/", rootRouter);
app.use("/doctors", doctorsRouter);
app.use("/specialities", specialityRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
