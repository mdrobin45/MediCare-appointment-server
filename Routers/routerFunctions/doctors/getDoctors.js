const { DoctorModel } = require("../../../Models/models");

const getDoctors = async (req, res) => {
   try {
      const result = await DoctorModel.find({}).populate(
         "category",
         "name -_id"
      );
      res.send(result);
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getDoctors;