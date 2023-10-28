const jwt = require("jsonwebtoken");

const token = (req, res) => {
   const { name, email } = req.body;
   try {
      // Generate token
      const token = jwt.sign({ name, email }, process.env.JWT_SECRET_SIGN, {
         expiresIn: "1h",
      });

      // Set token in cookie
      res.cookie("authToken", token, {
         maxAge: 216000,
         httpOnly: true,
      });
      res.status(200).json({ token: token });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error!" });
   }
};

module.exports = token;
