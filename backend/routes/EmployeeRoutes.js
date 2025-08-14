import express from "express"
import { AddEmploye } from "../Controllers/AddEmploye.js"
import { getAllData } from "../Controllers/GetEmplopye.js"
import { UpdateEmp } from "../Controllers/UpdateEmploye.js"
import { deleteEmp } from "../Controllers/DeleteEmploye.js"

const router = express.Router()


router.post("/AddEmploye", AddEmploye)
router.get("/getAllData", getAllData)
router.put("/UpdateEmp/:id", UpdateEmp)
router.delete("/deleteEmp/:id", deleteEmp)

export default router;
