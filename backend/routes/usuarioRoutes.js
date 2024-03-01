import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
  perfil,
  obtenerUsuarios,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas para los usuarios
router.get("/", obtenerUsuarios);
router.post("/", registrar);

router.post("/registro", registrar); // Crea un nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.get("/perfil", checkAuth, perfil);

export default router;
