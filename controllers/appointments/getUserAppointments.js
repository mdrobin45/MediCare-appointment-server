const { AppointmentModel } = require("../../models/models");

const getUserAppointments = async (req, res) => {
   try {
      const { userEmail } = req.body;
      console.log(userEmail);
      const result = await AppointmentModel.find({ email: userEmail }).populate(
         "doctor",
         "name -_id"
      );
      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getUserAppointments;
