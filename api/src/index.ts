import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import { authRoutes, userRotes } from "./routes";

// port
const PORT = process.env.PORT || 8000;

// intializing app
const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRotes);

app.listen(PORT, () => {
  console.log(`SUCCESS: app listening on http://localhost:${PORT}`);
});
