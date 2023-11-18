const { UserModel } = require("../../models/models");

const addNewUser = async (req, res) => {
   try {
      const userData = req.body;
      const result = await UserModel(userData).save();
      res.status(200).json({ id: result._id, message: "User added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addNewUser;
