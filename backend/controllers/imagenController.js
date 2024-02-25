import Imagen from "../models/Imagen.js";

export const obtenerImagenes = async (req, res) => {
  try {
    const imagenes = await Imagen.obtenerTodasLasImagenes();
    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerImagenPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const imagen = await Imagen.obtenerImagenPorId(id);
    if (!imagen) {
      return res.status(404).json({ mensaje: "Imagen no encontrada" });
    }
    res.json(imagen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearImagen = async (req, res) => {
  const imagenData = req.body;
  try {
    const nuevaImagen = await Imagen.crearImagen(imagenData);
    res.status(201).json(nuevaImagen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarImagen = async (req, res) => {
  const { id } = req.params;
  const imagenData = req.body;
  try {
    const imagenActualizada = await Imagen.actualizarImagen(id, imagenData);
    if (!imagenActualizada) {
      return res.status(404).json({ mensaje: "Imagen no encontrada" });
    }
    res.json(imagenActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarImagen = async (req, res) => {
  const { id } = req.params;
  try {
    const imagenEliminada = await Imagen.eliminarImagen(id);
    if (!imagenEliminada) {
      return res.status(404).json({ mensaje: "Imagen no encontrada" });
    }
    res.json({ mensaje: "Imagen eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
