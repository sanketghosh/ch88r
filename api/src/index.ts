// console.log("hello");
import express from "express";
import "dotenv/config";
import healthcheckRoutes from "./routes/healthcheck.routes";

const app = express();

const PORT = process.env.PORT || 8000;

app.use("/api/v1", healthcheckRoutes);

app.listen(PORT, () => {
  console.log(`SUCCESS: app listening on http://localhost:${PORT}`);
});
