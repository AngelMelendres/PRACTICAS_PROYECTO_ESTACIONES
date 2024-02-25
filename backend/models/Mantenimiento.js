import { pool } from "../config/db.js";

class Mantenimiento {
  static async obtenerTodosLosMantenimientos() {
    const query = "SELECT * FROM mantenimientos";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerMantenimientoPorId(id) {
    const query = "SELECT * FROM mantenimientos WHERE idmantenimiento = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearMantenimiento(mantenimientoData) {
    const { nombre, descripcion, actividades, mantenimientoscol } = mantenimientoData;
    const query =
      "INSERT INTO mantenimientos (nombre, descripcion, actividades, mantenimientoscol) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [nombre, descripcion, actividades, mantenimientoscol];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarMantenimiento(id, mantenimientoData) {
    const { nombre, descripcion, actividades, mantenimientoscol } = mantenimientoData;
    const query =
      "UPDATE mantenimientos SET nombre = $1, descripcion = $2, actividades = $3, mantenimientoscol = $4 WHERE idmantenimiento = $5 RETURNING *";
    const values = [nombre, descripcion, actividades, mantenimientoscol, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarMantenimiento(id) {
    const query = "DELETE FROM mantenimientos WHERE idmantenimiento = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Mantenimiento;
