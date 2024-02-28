import Estacion from "../models/Estacion.js";
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

export const crearEstacion = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const estacionData = req.body;
      const imagen = req.file;

      // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
      const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
      fs.renameSync(imagen.path, rutaImagen);

      // Guarda la dirección de la imagen junto con otros datos en la base de datos
      await Estacion.crearEstacion({
        ...estacionData,
        imagen: process.env.HOST + "/" + rutaImagen,
      });
      res.json({ mensaje: "Estación creada exitosamente" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

export const actualizarEstacion = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { idestacion } = req.params;
      const estacionData = req.body;
      // Verifica si hay una imagen adjunta en la solicitud
      if (req.file) {
        const imagen = req.file;
        // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
        const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
        fs.renameSync(imagen.path, rutaImagen);
        await Estacion.actualizarEstacion(idestacion, {
          ...estacionData,
          imagen: process.env.HOST + "/" + rutaImagen,
        });
      } else {
        // Si no hay una imagen adjunta, simplemente actualiza los otros datos
        await Estacion.actualizarEstacion(idestacion, estacionData);
      }

      res.json({ mensaje: "Estación actualizada exitosamente" });
    });
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
