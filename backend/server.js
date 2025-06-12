import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";

import userRouter from "./routes/user.routes.js";
import chatRouter from "./routes/chat.routes.js";
import authRouter from "./routes/auth.routes.js";



const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();
console.log("1" , __dirname)
let str  = path.join(__dirname, "../frontend/dist/index.html")
console.log("2" , str)

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/chat", chatRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
