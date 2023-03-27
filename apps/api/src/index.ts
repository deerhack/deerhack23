import express, { Express } from "express";
import dotenv from "dotenv";
import { AuthRouter } from "./routes";
import { SponsorRouter } from "./routes";
import { setUser } from "./middleware";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"
import path = require("path");



dotenv.config();

const app: Express = express();

const fileUploadConfig :Object = {
  limits:1024*1024*5,
  abortOnLimit:true
}

const PORT = 5000;

// middlewares
app.use("/public",express.static(path.join(__dirname,"..","public")))

app.use(express.json());
app.use(cookieParser());
app.use(setUser);
app.use(fileUpload(fileUploadConfig))

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/sponsor",SponsorRouter);

function init() {
  console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, init);

module.exports = app;
