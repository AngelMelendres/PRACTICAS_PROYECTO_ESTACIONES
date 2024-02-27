import Sensor from "../models/Sensor.js";
import multer from "multer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Especifica la carpeta donde quieres almacenar las imágenes
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".").pop(); // Obtiene la extensión del archivo original
    const nombreArchivo = uuidv4() + "." + extension; // Genera un nombre de archivo único utilizando UUID
    cb(null, nombreArchivo);
  },
});
const upload = multer({ storage: storage });


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
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const sensorData = req.body;
      const imagen = req.file;

      // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
      const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
      fs.renameSync(imagen.path, rutaImagen);

      // Guarda la dirección de la imagen junto con otros datos en la base de datos
       await Sensor.crearSensor({
        ...sensorData,
        imagen: process.env.HOST + "/" + rutaImagen,
      }); 
      console.log(rutaImagen);
      res.json({ mensaje: "Sensor creado exitosamente" });
    });
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
