const { DoctorModel, AppointmentModel } = require("../../models/models");

const getDoctorsAppointment = async (req, res) => {
   try {
      const { userEmail } = req.query;

      // Retrieve only appointment with doctor email
      if (userEmail) {
         // Find doctor id with email
         const doctor = await DoctorModel.findOne({ email: userEmail });

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

module.exports = getDoctorsAppointment;
