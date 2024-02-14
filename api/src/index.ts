import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// local modules
import { connectDB } from "./config/dbConnection";
import usersRoute from "./routes/users.routes";
import authRoutes from "./routes/auth.routes";

// database connection
connectDB();

const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/v1", usersRoute);
app.use("/api/v1", authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SUCCESS: app listening on http://localhost:${PORT}`);
});
