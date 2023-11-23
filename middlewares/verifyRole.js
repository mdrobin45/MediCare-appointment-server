const { UserModel } = require("../models/models");

const verifyRole = (roles) => async (req, res, next) => {
   try {
      const { userEmail } = req.query;

      // Find user role from db by email
      const user = await UserModel.findOne({ email: userEmail });
      !roles.includes(user.role)
         ? res.status(403).json({ error: "You are not allowed to access" })
         : next();
   } catch {
      res.status(403).json({ message: "Unauthenticated user" });
   }
};

module.exports = verifyRole;
