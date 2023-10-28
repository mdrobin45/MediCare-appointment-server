const { DoctorModel } = require("../../../Models/models");

const addMultipleDoctor = async (req, res) => {
   try {
      const multipleDoctors = req.body;
      await DoctorModel.insertMany(multipleDoctors);

      res.status(200).json({ message: "Doctors added" });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addMultipleDoctor;
