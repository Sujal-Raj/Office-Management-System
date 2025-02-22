import express from 'express'
// import {createEmployee, getAllEmployees , getEmployeeById, updateEmployee, deleteEmployee} from '../controller/employeeController.js';
import {createEmployee, getAllEmployees , getEmployeeById, updateEmployee, deleteEmployee, getEmployeeByEmail} from '../controller/employeeController.js';
// import employeeController from "../controller/employeeController.js";

const router = express.Router();

// 📌 Define Routes
router.post("/create", createEmployee);
router.get("/list", getAllEmployees);
router.get("/:id", getEmployeeById);
router.get('/find', getEmployeeByEmail);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

// module.exports = router;
export default router;
