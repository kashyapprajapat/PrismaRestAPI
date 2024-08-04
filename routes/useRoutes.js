import { Router } from 'express'
import { createUser, deleateUser, fetchUser, getUser, updateUser } from "../controller/UserController.js"
const router = Router()

router.post("/",createUser)
router.put("/:id",updateUser)
router.get("/",fetchUser)
router.get("/:id", getUser)
router.delete("/:id",deleateUser)

export default router