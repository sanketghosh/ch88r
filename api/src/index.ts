// console.log("hello");
import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SUCCESS: app listening on http://localhost:${PORT}`);
});
