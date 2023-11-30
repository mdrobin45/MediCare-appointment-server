const { DoctorModel, AppointmentModel } = require("../../models/models");

const getDoctorsAppointment = async (req, res) => {
   try {
      const { email } = req.query;

      // Retrieve only appointment with doctor email
      if (email) {
         // Find doctor id with email
         const doctor = await DoctorModel.findOne({ email });

         // Use doctor id to find appointments
         const result = await AppointmentModel.find({
            doctor: doctor._id,
         }).populate("doctor", "name email");

         res.send(result);
      }
      res.end();
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getDoctorsAppointment;
