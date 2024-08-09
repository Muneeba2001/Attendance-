import express, { Router } from "express";
import mongoose from "mongoose";
import appRouter from "./routes/Register/index.js";
import cors from "cors";
const appData = express();

appData.use(express.json());
appData.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Attendance")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error: ", err));

appData.use(appRouter);
appData.listen(3000, () => {
  console.log("Server Started");
});
