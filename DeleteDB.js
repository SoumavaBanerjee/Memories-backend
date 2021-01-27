import postMessage from "./models/postMessage.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Env variables
const CONNECTION_URL = process.env.CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: "true",
  })
  .then(() => console.log("Connected to DB. Commencing deletion operation..."))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

const deleteData = async () => {
  try {
    // Delete All previous data on database
    await postMessage.deleteMany();
    console.log(`Data deleted successfully `);
    process.exit();
  } catch (error) {
    console.log(`ERROR in deleting: ${error}`);
    process.exit(-1);
  }
};

deleteData();
