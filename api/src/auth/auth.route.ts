import * as express from "express"
import { createUserController, loginController } from "./auth.controller"
const router: express.Router = express.Router()

router.post("/register", createUserController )
router.post("/login", loginController)


export default router