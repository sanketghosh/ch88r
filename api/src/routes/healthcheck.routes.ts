import express from "express";
import { healthcheckHandler } from "../controllers/healthcheck.controllers";

const router = express.Router();

router.get("/healthcheck", healthcheckHandler);

export default router;
