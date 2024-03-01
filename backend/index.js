import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import estacionRoutes from "./routes/estacionRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import empleadoRoutes from "./routes/empleadoRouter.js";
import mantenimientoRoutes from "./routes/mantenimientoRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import path from "path";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

app.use(cors());
// Obtiene la ruta del directorio actual
app.use("/uploads", express.static("uploads"));

// Routing
app.use("/api/estaciones", estacionRoutes);
app.use("/api/sensores", sensorRoutes);
app.use("/api/empleados", empleadoRoutes);
app.use("/api/mantenimientos", mantenimientoRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/usuarios", usuarioRoutes);

const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidors corriendo en el puerto ${PORT}`);
});

// Aquí puedes agregar la configuración de Socket.io si la necesitas
