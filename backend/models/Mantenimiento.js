import { pool } from "../config/db.js";

class Mantenimiento {
  static async obtenerTodosLosMantenimientos() {
    const query = "SELECT * FROM sistemaweb.mantenimientos";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerMantenimientoPorId(id) {
    const query = "SELECT * FROM sistemaweb.mantenimientos WHERE idmantenimiento = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearMantenimiento(mantenimientoData) {
    const { nombre, descripcion, actividades, imagen } = mantenimientoData;
    const query =
      "INSERT INTO sistemaweb.mantenimientos (nombre, descripcion, actividades, imagen) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [nombre, descripcion, actividades, imagen];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarMantenimiento(id, mantenimientoData) {
    const { nombre, descripcion, actividades, imagen } = mantenimientoData;

    try {
      let query =
        "UPDATE sistemaweb.mantenimientos SET nombre = $1, descripcion = $2, actividades = $3";
      let values = [nombre, descripcion, actividades];
      if (imagen) {
        query += ", imagen = $4";
        values.push(imagen);
      }

      // Añadir la condición de actualización basada en el idestacion
      values.push(id);
      query += " WHERE idmantenimiento = $" + values.length + " RETURNING *";
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw new Error("Error al actualizar el mantenimiento: " + error.message);
    }
  }

  static async eliminarMantenimiento(id) {
    const query =
      "DELETE FROM sistemaweb.mantenimientos WHERE idmantenimiento = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Mantenimiento;
