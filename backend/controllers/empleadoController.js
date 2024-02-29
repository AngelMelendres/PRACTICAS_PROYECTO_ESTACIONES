import Empleado from "../models/Empleado.js";
import multer from "multer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

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

export const obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.obtenerTodosLosEmpleados();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEmpleadoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await Empleado.obtenerEmpleadoPorId(id);
    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearEmpleado = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const empleadoData = req.body;
      const imagen = req.file;

      // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
      const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
      fs.renameSync(imagen.path, rutaImagen);

      // Guarda la dirección de la imagen junto con otros datos en la base de datos
      await Empleado.crearEmpleado({
        ...empleadoData,
        imagen: process.env.HOST + "/" + rutaImagen,
      });
      res.json({ mensaje: "Empleado creado exitosamente" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarEmpleado = async (req, res) => {
  try {
    upload.single("imagen")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }
      const { id } = req.params;
      const empleadoData = req.body;

      if (req.file) {
        const imagen = req.file;
        // Mueve la imagen desde la ubicación temporal a la carpeta deseada en tu proyecto
        const rutaImagen = "uploads/" + imagen.filename; // Ruta de la imagen en tu proyecto
        fs.renameSync(imagen.path, rutaImagen);
        await Empleado.actualizarEmpleado(id, {
          ...empleadoData,
          imagen: process.env.HOST + "/" + rutaImagen,
        });
      } else {
        await Empleado.actualizarEmpleado(id, empleadoData);
      }
    });

    const empleadoActualizado = await Empleado.actualizarEmpleado(id, empleadoData);
    if (!empleadoActualizado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
    res.json(empleadoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const empleadoEliminado = await Empleado.eliminarEmpleado(id);
    if (!empleadoEliminado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
    res.json({ mensaje: "Empleado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
