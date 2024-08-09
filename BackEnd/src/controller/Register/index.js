import userModel from "../../model/Register/index.js";

const registerController = {
  create: async (req, res) => {
    try {
      const payload = req.body;
      const userRegister = await userModel.create(payload);
      userRegister.save();
      res.status(200).json({ message: "Data: ", userRegister });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default registerController;
