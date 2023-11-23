const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
   try {
      const { userEmail } = req.query;
      const { authToken } = req.cookies;

      // If token is exist
      if (!authToken) {
         res.status(404).json({ error: "Token not found" });
         return;
      }

      // verify token
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
module.exports = verifyToken;
