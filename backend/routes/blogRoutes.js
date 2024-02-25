import express from "express";
import {
  obtenerBlogs,
  obtenerBlogPorId,
  crearBlog,
  actualizarBlog,
  eliminarBlog,
} from "../controllers/blogController.js";

const router = express.Router();

// Rutas para los blogs
router.get("/", obtenerBlogs);
router.get("/:id", obtenerBlogPorId);
router.post("/", crearBlog);
router.put("/:id", actualizarBlog);
router.delete("/:id", eliminarBlog);

export default router;
