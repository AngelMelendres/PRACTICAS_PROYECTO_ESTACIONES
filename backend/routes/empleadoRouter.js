import express from "express";
import {
  obtenerEmpleados,
  obtenerEmpleadoPorId,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
} from "../controllers/empleadoController.js";

const router = express.Router();

// Rutas para los empleados
router.get("/", obtenerEmpleados);
router.get("/:id", obtenerEmpleadoPorId);
router.post("/", crearEmpleado);
router.put("/:id", actualizarEmpleado);
router.delete("/:id", eliminarEmpleado);

export default router;