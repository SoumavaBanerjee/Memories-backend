import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

// Top level express application
const app = express();

// Using env variables
dotenv.config();

// Env variables
const CONNECTION_URL = process.env.CONNECTION;
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

// Routes

app.use("/posts", postRoutes);

// Connection
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: "true",
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
