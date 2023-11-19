const { UserModel } = require("../../models/models");

const addNewUser = async (req, res) => {
   try {
      const userData = req.body;
      const userEmail = userData.email;

      // Check database if there has already exist user
      const findUser = await UserModel.findOne({ email: userEmail });

      // If user find do code will not execute for save again
      if (findUser) {
         res.end();
         return;
      }

      const result = await UserModel(userData).save();
      res.status(200).json({ id: result._id, message: "User added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addNewUser;
