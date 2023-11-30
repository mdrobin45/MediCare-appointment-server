const { AppointmentModel } = require("../../models/models");

const getPatientAppointments = async (req, res) => {
   try {
      const { email } = req.query;

      // Retrieve user appointments
      if (email) {
         const result = await AppointmentModel.find({ email }).populate(
            "doctor",
            "name"
         );
         res.send(result);
      }
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getPatientAppointments;
