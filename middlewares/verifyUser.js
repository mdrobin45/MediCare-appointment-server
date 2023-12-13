const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/models");

const verifyUser = (roles) => async (req, res, next) => {
   try {
      const { authToken } = req.cookies;

      // If token is not exist
      if (!authToken) {
         res.status(401).json({ error: "Token not found" });
         return;
      }

      // verify token
      const decoded = await jwt.verify(authToken, process.env.JWT_SECRET_SIGN);

      if (decoded) {
         const { email } = decoded;
         // If token verified then next step to verify user role
         if (roles.length !== 0) {
            // Find user role from db by email
            const user = await UserModel.findOne({ email });
            if (!roles.includes(user.role)) {
               res.status(403).json({ error: "You are not allowed to access" });
               return;
            }

            req.decoded;
            next();
         } else {
            req.decoded;
            next();
         }
      } else {
         res.status(401).json({ message: "Authentication error" });
      }
   } catch {
      res.status(401).json({ message: "Authentication error" });
   }
};
module.exports = verifyUser;
