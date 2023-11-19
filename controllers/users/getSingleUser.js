const { UserModel } = require("../../models/models");

const getSingleUser = async (req, res) => {
   try {
      const { email } = req.query;
      const user = await UserModel.findOne({ email });

      if (!user) {
         res.end();
         return;
      }
      res.status(200).json(user);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getSingleUser;
