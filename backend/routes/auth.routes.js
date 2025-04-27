import express from 'express'
import { login, singUp } from '../controllers/auth.controllers.js'

const router = express.Router()


router.get("/signup",singUp)

router.get("/login",login)

router.get("/logout",login)

export default router

