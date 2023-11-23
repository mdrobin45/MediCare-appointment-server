const { AppointmentModel } = require("../../models/models");

const updateStatus = async (req, res) => {
   try {
      const { id } = req.params;
      const status = req.body;

      // Check if already updated
      const item = await AppointmentModel.findById(id);

      if (item.status === status.status) {
         res.status(409);
         return;
      }

      const result = await AppointmentModel.findByIdAndUpdate(id, status);

      if (result) {
         res.status(200).json({ id: result._id });
      }
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = updateStatus;
