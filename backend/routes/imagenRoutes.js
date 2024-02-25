import express from "express";
import {
  obtenerImagenes,
  obtenerImagenPorId,
  crearImagen,
  actualizarImagen,
  eliminarImagen,
} from "../controllers/imagenController.js";

const router = express.Router();

// Rutas para las imágenes
router.get("/", obtenerImagenes);
router.get("/:id", obtenerImagenPorId);
router.post("/", crearImagen);
router.put("/:id", actualizarImagen);
router.delete("/:id", eliminarImagen);

export default router;
