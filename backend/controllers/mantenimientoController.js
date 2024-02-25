import Mantenimiento from "../models/Mantenimiento.js";

export const obtenerMantenimientos = async (req, res) => {
  try {
    const mantenimientos = await Mantenimiento.obtenerTodosLosMantenimientos();
    res.json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerMantenimientoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const mantenimiento = await Mantenimiento.obtenerMantenimientoPorId(id);
    if (!mantenimiento) {
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }
    res.json(mantenimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearMantenimiento = async (req, res) => {
  const mantenimientoData = req.body;
  try {
    const nuevoMantenimiento = await Mantenimiento.crearMantenimiento(mantenimientoData);
    res.status(201).json(nuevoMantenimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarMantenimiento = async (req, res) => {
  const { id } = req.params;
  const mantenimientoData = req.body;
  try {
    const mantenimientoActualizado = await Mantenimiento.actualizarMantenimiento(id, mantenimientoData);
    if (!mantenimientoActualizado) {
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }
    res.json(mantenimientoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarMantenimiento = async (req, res) => {
  const { id } = req.params;
  try {
    const mantenimientoEliminado = await Mantenimiento.eliminarMantenimiento(id);
    if (!mantenimientoEliminado) {
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }
    res.json({ mensaje: "Mantenimiento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
