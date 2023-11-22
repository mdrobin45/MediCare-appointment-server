const { AppointmentModel } = require("../../models/models");

const getPatientAppointments = async (req, res) => {
   try {
      const { userEmail } = req.query;

      // Retrieve user appointments
      if (userEmail) {
         const result = await AppointmentModel.find({
            email: userEmail,
         }).populate("doctor", "name");
         res.send(result);
      }
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getPatientAppointments;
