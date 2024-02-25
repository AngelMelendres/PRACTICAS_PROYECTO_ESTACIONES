import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import estacionRoutes from "./routes/estacionRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import mantenimientoRoutes from "./routes/mantenimientoRoutes.js";
import rolRoutes from "./routes/rolRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import imagenRoutes from "./routes/imagenRoutes.js";
import tipoEstacionRoutes from "./routes/tipoEstacionRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

/* const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No está permitido
      callback(new Error("Error de Cors"));
    }
  },
}; */
app.use(cors());

// Routing
app.use("/api/estaciones", estacionRoutes);
app.use("/api/sensores", sensorRoutes);
app.use("/api/mantenimientos", mantenimientoRoutes);
app.use("/api/roles", rolRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/imagenes", imagenRoutes);
app.use("/api/tipoestaciones", tipoEstacionRoutes);
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidors corriendo en el puerto ${PORT}`);
});

// Aquí puedes agregar la configuración de Socket.io si la necesitas
