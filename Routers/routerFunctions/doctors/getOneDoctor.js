const { DoctorModel } = require("../../../Models/models");

const getOneDoctor = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await DoctorModel.findById(id).populate(
         "speciality",
         "name -_id"
      );
      res.send(result);
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getOneDoctor;
