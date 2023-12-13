const { AppointmentModel } = require("../../models/models");

const getFilteredAppointment = async (req, res) => {
   try {
      const result = await AppointmentModel.aggregate([
         {
            $match: {
               createdAt: { $lte: new Date() },
            },
         },
         {
            $project: {
               year: { $year: "$createdAt" },
               month: { $month: "$createdAt" },
               gender: 1,
            },
         },
         {
            $group: {
               _id: { year: "$year", month: "$month" },
               totalAppointments: { $sum: 1 },
               genderCounts: {
                  $push: { gender: "$gender", count: 1 },
               },
            },
         },
         {
            $group: {
               _id: {
                  year: "$_id.year",
                  month: "$_id.month",
                  gender: "$genderCounts.gender",
               },
               totalAppointments: { $first: "$totalAppointments" },
               genderCount: { $sum: "$genderCounts.count" },
            },
         },
         {
            $project: {
               _id: 0,
               year: "$_id.year",
               month: "$_id.month",
               gender: "$genderCount",
               totalAppointments: 1,
            },
         },
      ]);

      res.send(result);
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getFilteredAppointment;
