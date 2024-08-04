import { Router } from "express";
import {
  createPost,
  fetchPost,
  getSinglepost,
  updatePost,
  deleatePost
} from "../controller/PostController.js";
const router = Router();

router.post("/", createPost);
router.put("/:id", updatePost);
router.get("/", fetchPost);
router.get("/:id", getSinglepost);
router.delete("/:id", deleatePost);

export default router;
