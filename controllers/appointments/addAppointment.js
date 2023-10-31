const { AppointmentModel } = require("../../models/models");

const addAppointment = async (req, res) => {
   try {
      const newAppointment = req.body;
      const result = await new AppointmentModel(newAppointment).save();
      res.status(200).json({ id: result._id, message: "Appointment added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addAppointment;
