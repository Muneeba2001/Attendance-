import { Router } from "express";
import registerController from "../../controller/Register/index.js";
const appRouter = Router();

appRouter.post("/register", registerController.create);

export default appRouter;
