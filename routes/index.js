import { Router } from "express"
import userRoutes from "./useRoutes.js"
import postRoutes from "./postRoutes.js"
import commentRoutes from "./commentRoutes.js"
const router = Router()

// user Route
router.use("/api/user", userRoutes)

// post Route
router.use("/api/post",postRoutes)

// Comment Route
router.use("/api/comment",commentRoutes)

export default router