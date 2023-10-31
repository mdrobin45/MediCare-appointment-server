const { AppointmentModel } = require("../../models/models");

const getAppointment = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await AppointmentModel.findById(id).populate({
         path: "doctor",
         select: "name speciality -_id",
         populate: { path: "speciality", select: "name -_id" },
      });
      res.send(result);
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getAppointment;
