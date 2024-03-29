import Mantenimiento from "../models/Mantenimiento.js";
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
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const mantenimientoData = req.body;
      const imagen = req.file;

      // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
      const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
      fs.renameSync(imagen.path, rutaImagen);

      // Guarda la dirección de la imagen junto con otros datos en la base de datos
      await Mantenimiento.crearMantenimiento({
        ...mantenimientoData,
        imagen: process.env.HOST + "/" + rutaImagen,
      });
      console.log(rutaImagen);
      res.json({ mensaje: "mantenimiento creado exitosamente" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarMantenimiento = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { id } = req.params;
      const mantenimientoData = req.body;

      if (req.file) {
        const imagen = req.file;
        // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
        const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
        fs.renameSync(imagen.path, rutaImagen);
        await Mantenimiento.actualizarMantenimiento(id, {
          ...mantenimientoData,
          imagen: process.env.HOST + "/" + rutaImagen,
        });
      } else {
        await Mantenimiento.actualizarMantenimiento(id, mantenimientoData);
      }
    });

    const sensorActualizado = await Sensor.actualizarSensor(id, sensorData);
    if (!sensorActualizado) {
      return res.status(404).json({ mensaje: "Sensor no encontrado" });
    }
    res.json(sensorActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarMantenimiento = async (req, res) => {
  const { id } = req.params;
  try {
    const mantenimientoEliminado = await Mantenimiento.eliminarMantenimiento(
      id
    );
    if (!mantenimientoEliminado) {
      return res.status(404).json({ mensaje: "Mantenimiento no encontrado" });
    }
    res.json({ mensaje: "Mantenimiento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
