import express from "express";
import { homeRoute } from "../controller/home.js";

const router = express.Router();

router.get("/", homeRoute);

export default router;
