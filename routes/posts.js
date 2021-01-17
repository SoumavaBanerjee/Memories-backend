import express from "express";
import { getPosts, createPosts, updatePost } from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePost);

export default router;
