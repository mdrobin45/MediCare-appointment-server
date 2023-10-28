const { DoctorModel } = require("../../../Models/models");

const addOneDoctor = async (req, res) => {
   try {
      const newDoctor = req.body;
      const result = await new DoctorModel(newDoctor).save();
      res.status(200).json({ id: result._id, message: "Doctor added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addOneDoctor;
