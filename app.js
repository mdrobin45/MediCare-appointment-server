const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const doctorsRouter = require("./routes/doctors");
const specialityRouter = require("./routes/specialities");
const database = require("./database");
const rootRouter = require("./routes/root");
require("dotenv").config();

// Use middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET_SIGN));

// Database connection
database();

// application router
app.use("/", rootRouter);
app.use("/doctors", doctorsRouter);
app.use("/speciality", specialityRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
