const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const doctorsRouter = require("./routes/doctors");
const specialityRouter = require("./routes/specialities");
const database = require("./database");
const rootRouter = require("./routes/root");
const appointmentRoute = require("./routes/appointments");
const userRouter = require("./routes/users");
require("dotenv").config();

// Use middleware
app.use(cors({ credentials: true, origin: process.env.LOCAL_SITE }));
app.use(express.json());
app.use(cookieParser());

// Database connection
database();

// application router
app.use("/", rootRouter);
app.use("/doctor", doctorsRouter);
app.use("/speciality", specialityRouter);
app.use("/appointment", appointmentRoute);
app.use("/users", userRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
