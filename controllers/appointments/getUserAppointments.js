const { AppointmentModel, DoctorModel } = require("../../models/models");

const getUserAppointments = async (req, res) => {
   try {
      const { doctorEmail } = req.query;
      const { userEmail } = req.query;

      // Retrieve user appointments
      if (userEmail && !doctorEmail) {
         const result = await AppointmentModel.find({
            email: userEmail,
         }).populate("doctor", "name");
         res.send(result);
      }

      // Retrieve only appointment with doctor email
      if (!userEmail && doctorEmail) {
         // Find doctor id with email
         const doctor = await DoctorModel.findOne({ email: doctorEmail });

         // Use doctor id to find appointments
         const result = await AppointmentModel.find({
            doctor: doctor._id,
         }).populate("doctor", "name email");

         res.send(result);
      }
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getUserAppointments;
