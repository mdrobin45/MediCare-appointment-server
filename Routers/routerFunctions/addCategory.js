const { CategoryModel } = require("../../Models/models");

const addCategory = async (req, res) => {
   try {
      const newCategory = req.body;
      const category = new CategoryModel(newCategory);
      await category.save();
      res.status(200).json({ message: "Category added" });
   } catch {
      res.status(500).json({ message: "Internal server error" });
   }
};

module.exports = addCategory;
