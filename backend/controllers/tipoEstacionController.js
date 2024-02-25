import TipoEstacion from "../models/TipoEstacion.js";

export const obtenerTiposEstacion = async (req, res) => {
  try {
    const tiposEstacion = await TipoEstacion.obtenerTodosLosTiposEstacion();
    res.json(tiposEstacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerTipoEstacionPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const tipoEstacion = await TipoEstacion.obtenerTipoEstacionPorId(id);
    if (!tipoEstacion) {
      return res.status(404).json({ mensaje: "Tipo de Estación no encontrado" });
    }
    res.json(tipoEstacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearTipoEstacion = async (req, res) => {
  const tipoEstacionData = req.body;
  try {
    const nuevoTipoEstacion = await TipoEstacion.crearTipoEstacion(tipoEstacionData);
    res.status(201).json(nuevoTipoEstacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarTipoEstacion = async (req, res) => {
  const { id } = req.params;
  const tipoEstacionData = req.body;
  try {
    const tipoEstacionActualizado = await TipoEstacion.actualizarTipoEstacion(id, tipoEstacionData);
    if (!tipoEstacionActualizado) {
      return res.status(404).json({ mensaje: "Tipo de Estación no encontrado" });
    }
    res.json(tipoEstacionActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarTipoEstacion = async (req, res) => {
  const { id } = req.params;
  try {
    const tipoEstacionEliminado = await TipoEstacion.eliminarTipoEstacion(id);
    if (!tipoEstacionEliminado) {
      return res.status(404).json({ mensaje: "Tipo de Estación no encontrado" });
    }
    res.json({ mensaje: "Tipo de Estación eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
