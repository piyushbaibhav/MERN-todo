import dotenv from "dotenv";
import { connectToMongoDB } from "./database.js";
import express from "express";
import router from "./routes.js";

dotenv.config();
const app = express();
app.use("/api", router);

const port = process.env.PORT || 4000;

async function startServer(){
    await connectToMongoDB();
    app.listen(port, () => {
      console.log(`server listening on http://localhost:${port}`);
    });

}
startServer();