const { DoctorModel } = require("../../../Models/models");

const addDoctor = async (req, res) => {
   try {
      const newDoctor = req.body;
      const doctor = new DoctorModel(newDoctor);
      const result = await doctor.save();
      res.status(200).json({ id: result._id, message: "Doctor added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addDoctor;
