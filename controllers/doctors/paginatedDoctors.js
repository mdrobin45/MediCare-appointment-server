const { DoctorModel } = require("../../models/models");

const paginatedDoctor = async (req, res) => {
   try {
      const pageNumber = parseFloat(req.query.pageNumber);
      const pageSize = parseFloat(req.query.pageSize);

      const dataCount = await DoctorModel.find({}).estimatedDocumentCount();
      
      const result = await DoctorModel.find({})
         .skip((pageNumber - 1) * pageSize)
         .limit(pageSize)
         .populate("speciality", "name -_id");

      res.json({ result, dataCount });
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = paginatedDoctor;
