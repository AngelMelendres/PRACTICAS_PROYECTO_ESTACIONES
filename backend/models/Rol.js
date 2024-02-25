import { pool } from "../config/db.js";

class Rol {
  static async obtenerTodosLosRoles() {
    const query = "SELECT * FROM roles";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerRolPorId(id) {
    const query = "SELECT * FROM roles WHERE idrol = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearRol(rolData) {
    const { nombre, descripcion } = rolData;
    const query =
      "INSERT INTO roles (nombre, descripcion) VALUES ($1, $2) RETURNING *";
    const values = [nombre, descripcion];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarRol(id, rolData) {
    const { nombre, descripcion } = rolData;
    const query =
      "UPDATE roles SET nombre = $1, descripcion = $2 WHERE idrol = $3 RETURNING *";
    const values = [nombre, descripcion, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarRol(id) {
    const query = "DELETE FROM roles WHERE idrol = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Rol;
