import express from 'express'
import { login, singUp } from '../controllers/auth.controllers.js'

const router = express.Router()


router.post("/signup",singUp)
router.post("/login",login)
router.post("/logout",login)

export default router

