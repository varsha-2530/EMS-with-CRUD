import express from "express"
import { AddEmploye } from "../Controllers/AddEmploye.js"

const router = express.Router()


router.post("/AddEmploye", AddEmploye)


export default router;