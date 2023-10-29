const { SpecialitiesModel } = require("../../models/models");

const addSpeciality = async (req, res) => {
   try {
      const newSpeciality = req.body;
      const speciality = new SpecialitiesModel(newSpeciality);
      const result = await speciality.save();
      res.status(200).json({
         id: result._id,
         message: "Speciality added",
      });
   } catch {
      res.status(500).json({ message: "Internal server error" });
   }
};

module.exports = addSpeciality;
