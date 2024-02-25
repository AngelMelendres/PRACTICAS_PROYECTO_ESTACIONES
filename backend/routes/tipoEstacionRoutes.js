import express from "express";
import {
  obtenerTiposEstacion,
  obtenerTipoEstacionPorId,
  crearTipoEstacion,
  actualizarTipoEstacion,
  eliminarTipoEstacion,
} from "../controllers/tipoEstacionController.js";

const router = express.Router();

// Rutas para los tipos de estaciones
router.get("/", obtenerTiposEstacion);
router.get("/:id", obtenerTipoEstacionPorId);
router.post("/", crearTipoEstacion);
router.put("/:id", actualizarTipoEstacion);
router.delete("/:id", eliminarTipoEstacion);

export default router;
