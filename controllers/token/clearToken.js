const clearToken = async (req, res) => {
   try {
      res.clearCookie("authToken", { maxAge: 0 }).send({ success: true });
   } catch {
      res.status(500).json({ message: "Server Error" });
   }
};
module.exports = clearToken;
