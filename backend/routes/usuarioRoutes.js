import express from "express";
import {
  obtenerUsuarios,
  obtenerUsuarioPorEmail,
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

const router = express.Router();

// Rutas para los usuarios
router.get("/", obtenerUsuarios);
router.get("/:email", obtenerUsuarioPorEmail);
router.post("/registrar", registrar);
router.post("/autenticar", autenticar);
router.put("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/comprobar-token/:token", comprobarToken);
router.put("/nuevo-password/:token", nuevoPassword);
router.get("/perfil", perfil);

export default router;
