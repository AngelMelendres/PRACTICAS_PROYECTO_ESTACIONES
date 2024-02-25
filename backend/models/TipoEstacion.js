import { pool } from "../config/db.js";

class TipoEstacion {
  static async obtenerTodosLosTiposEstacion() {
    const query = "SELECT * FROM tipoestaciones";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerTipoEstacionPorId(id) {
    const query = "SELECT * FROM tipoestaciones WHERE idtipoestacion = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearTipoEstacion(tipoEstacionData) {
    const { nombre, descripcion } = tipoEstacionData;
    const query =
      "INSERT INTO tipoestaciones (nombre, descripcion) VALUES ($1, $2) RETURNING *";
    const values = [nombre, descripcion];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarTipoEstacion(id, tipoEstacionData) {
    const { nombre, descripcion } = tipoEstacionData;
    const query =
      "UPDATE tipoestaciones SET nombre = $1, descripcion = $2 WHERE idtipoestacion = $3 RETURNING *";
    const values = [nombre, descripcion, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarTipoEstacion(id) {
    const query = "DELETE FROM tipoestaciones WHERE idtipoestacion = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default TipoEstacion;
