import Estacion from "../models/Estacion.js";

export const obtenerEstaciones = async (req, res) => {
  try {
    const estaciones = await Estacion.obtenerTodasLasEstaciones();
    res.json(estaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEstacionPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const estacion = await Estacion.obtenerEstacionPorId(id);
    if (!estacion) {
      return res.status(404).json({ mensaje: "Estación no encontrada" });
    }
    res.json(estacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearEstacion = async (req, res) => {
  const estacionData = req.body;
  try {
    const nuevaEstacion = await Estacion.crearEstacion(estacionData);
    res.status(201).json(nuevaEstacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarEstacion = async (req, res) => {
  const { id } = req.params;
  const estacionData = req.body;
  try {
    const estacionActualizada = await Estacion.actualizarEstacion(
      id,
      estacionData
    );
    if (!estacionActualizada) {
      return res.status(404).json({ mensaje: "Estación no encontrada" });
    }
    res.json(estacionActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarEstacion = async (req, res) => {
  const { id } = req.params;
  try {
    const estacionEliminada = await Estacion.eliminarEstacion(id);
    if (!estacionEliminada) {
      return res.status(404).json({ mensaje: "Estación no encontrada" });
    }
    res.json({ mensaje: "Estación eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
