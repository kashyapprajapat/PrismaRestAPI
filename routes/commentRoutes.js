import { Router } from "express";
import {
  createComment,
  fetchComment,
  getSingleComment,
 updatecomment,
  deleateComment
} from "../controller/CommentController.js";
const router = Router();

router.post("/", createComment);
router.put("/:id",updatecomment);
router.get("/", fetchComment);
router.get("/:id", getSingleComment);
router.delete("/:id", deleateComment);

export default router;
