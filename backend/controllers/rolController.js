import Rol from "../models/Rol.js";

export const obtenerRoles = async (req, res) => {
  try {
    const roles = await Rol.obtenerTodosLosRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerRolPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.obtenerRolPorId(id);
    if (!rol) {
      return res.status(404).json({ mensaje: "Rol no encontrado" });
    }
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearRol = async (req, res) => {
  const rolData = req.body;
  try {
    const nuevoRol = await Rol.crearRol(rolData);
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarRol = async (req, res) => {
  const { id } = req.params;
  const rolData = req.body;
  try {
    const rolActualizado = await Rol.actualizarRol(id, rolData);
    if (!rolActualizado) {
      return res.status(404).json({ mensaje: "Rol no encontrado" });
    }
    res.json(rolActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rolEliminado = await Rol.eliminarRol(id);
    if (!rolEliminado) {
      return res.status(404).json({ mensaje: "Rol no encontrado" });
    }
    res.json({ mensaje: "Rol eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
