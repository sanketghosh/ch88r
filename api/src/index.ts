// packages
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

// imported routes
import {
  authRoutes,
  conversationOfUserRoutes,
  groupConversationRoutes,
  individualConversationRoutes,
  userRotes,
} from "./routes";

// port
const PORT = process.env.PORT || 8000;

// initializing app
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

// routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRotes);
app.use("/api/v1", groupConversationRoutes);
app.use("/api/v1", individualConversationRoutes);
app.use("/api/v1", conversationOfUserRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app listener
app.listen(PORT, () => {
  console.log(`SUCCESS: app listening on http://localhost:${PORT}`);
});
