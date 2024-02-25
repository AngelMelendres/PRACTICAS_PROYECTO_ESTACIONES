import express from "express";
import {
  obtenerEstaciones,
  obtenerEstacionPorId,
  crearEstacion,
  actualizarEstacion, // Descomenta esta línea
  eliminarEstacion,  // Descomenta esta línea
} from "../controllers/estacionController.js"; 

const router = express.Router();

// Rutas para las estaciones climáticas
router.get("/", obtenerEstaciones);
router.get("/:id", obtenerEstacionPorId);
router.post("/", crearEstacion);
router.put("/:id", actualizarEstacion); // Descomenta esta línea
router.delete("/:id", eliminarEstacion); // Descomenta esta línea

export default router;
