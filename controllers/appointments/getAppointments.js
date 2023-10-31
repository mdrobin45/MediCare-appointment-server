const { AppointmentModel } = require("../../models/models");

const getAppointments = async (req, res) => {
   try {
      const result = await AppointmentModel.find({}).populate(
         "doctor",
         "name -_id"
      );
      res.send(result);
   } catch (err) {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getAppointments;
