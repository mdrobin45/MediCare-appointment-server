const jwt = require("jsonwebtoken");

const generateToken = (req, res) => {
   const email = req.body;
   try {
      // Generate token
      const token = jwt.sign(email, process.env.JWT_SECRET_SIGN, {
         expiresIn: "1h",
      });

      // Set token in cookie
      res.cookie("authToken", token, {
         maxAge: 216000,
         httpOnly: true,
         sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      });
      res.status(200).json({ token: token });
   } catch {
      res.status(500).json({ message: "Server error!" });
   }
};

module.exports = generateToken;
