import express from "express";
import {
  obtenerSensores,
  obtenerSensorPorId,
  crearSensor,
  actualizarSensor,
  eliminarSensor,
} from "../controllers/sensorController.js";

const router = express.Router();

// Rutas para los sensores
router.get("/", obtenerSensores);
router.get("/:id", obtenerSensorPorId);
router.post("/", crearSensor);
router.put("/:id", actualizarSensor);
router.delete("/:id", eliminarSensor);

export default router;
