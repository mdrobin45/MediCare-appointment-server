const { SpecialitiesModel } = require("../../models/models");

const getSpecialities = async (req, res) => {
   try {
      const result = await SpecialitiesModel.find({});
      res.send(result);
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getSpecialities;
