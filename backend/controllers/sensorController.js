import Sensor from "../models/Sensor.js";

export const obtenerSensores = async (req, res) => {
  try {
    const sensores = await Sensor.obtenerTodosLosSensores();
    res.json(sensores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerSensorPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const sensor = await Sensor.obtenerSensorPorId(id);
    if (!sensor) {
      return res.status(404).json({ mensaje: "Sensor no encontrado" });
    }
    res.json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearSensor = async (req, res) => {
  const sensorData = req.body;
  try {
    const nuevoSensor = await Sensor.crearSensor(sensorData);
    res.status(201).json(nuevoSensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarSensor = async (req, res) => {
  const { id } = req.params;
  const sensorData = req.body;
  try {
    const sensorActualizado = await Sensor.actualizarSensor(id, sensorData);
    if (!sensorActualizado) {
      return res.status(404).json({ mensaje: "Sensor no encontrado" });
    }
    res.json(sensorActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarSensor = async (req, res) => {
  const { id } = req.params;
  try {
    const sensorEliminado = await Sensor.eliminarSensor(id);
    if (!sensorEliminado) {
      return res.status(404).json({ mensaje: "Sensor no encontrado" });
    }
    res.json({ mensaje: "Sensor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
