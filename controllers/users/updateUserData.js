const { UserModel } = require("../../models/models");

const updateUserData = async (req, res) => {
   try {
      const updatedData = req.body;
      const { id } = req.params;
      const result = await UserModel.findByIdAndUpdate(id, updatedData);
      console.log(result);
      res.status(200).json({ id: result._id, message: "User updated" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = updateUserData;
