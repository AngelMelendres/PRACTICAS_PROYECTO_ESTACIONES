import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import { pool } from "../config/db.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const query = "SELECT * FROM sistemaweb.usuarios WHERE cedula = $1";
      const values = [decoded.cedula];

      const { rows } = await pool.query(query, values);

      req.usuario = {
        _cedula: rows[0].cedula,
        email: rows[0].email,
        nombres: rows[0].nombres,
        apellidos: rows[0].apellidos,
        rol: rows[0].rol,
        estado: rows[0].estado,
        token: token,
      };
      console.log(decoded);

      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un error" });
    }
  }

  if (!token) {
    const error = new Error("Token no válido");
    return res.status(401).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
