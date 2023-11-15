const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
   try {
      const { userEmail } = req.query;
      console.log(userEmail);
      const { authToken } = req.cookies;
      const decoded = await jwt.verify(authToken, process.env.JWT_SECRET_SIGN);
      const { email } = decoded;
      if (userEmail === email) {
         req.userEmail;
         next();
      } else {
         res.status(401).json({ message: "Authentication error" });
      }
   } catch (err) {
      console.log(err);
      res.status(401).json({ message: "Authentication error" });
   }
};
module.exports = authUser;
