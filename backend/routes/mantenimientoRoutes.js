import express from "express";
import {
  obtenerMantenimientos,
  obtenerMantenimientoPorId,
  crearMantenimiento,
  actualizarMantenimiento,
  eliminarMantenimiento,
} from "../controllers/mantenimientoController.js";

const router = express.Router();

// Rutas para los mantenimientos
router.get("/", obtenerMantenimientos);
router.get("/:id", obtenerMantenimientoPorId);
router.post("/", crearMantenimiento);
router.put("/:id", actualizarMantenimiento);
router.delete("/:id", eliminarMantenimiento);

export default router;
