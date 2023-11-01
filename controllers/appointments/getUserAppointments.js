const { AppointmentModel } = require("../../models/models");

const getUserAppointments = async (req, res) => {
   try {
      const { email } = req.query;
      console.log(email);
      const result = await AppointmentModel.find({ email }).populate(
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
