import { pool } from "../config/db.js";

class Sensor {
  static async obtenerTodosLosSensores() {
    const query = "SELECT * FROM sensores";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerSensorPorId(id) {
    const query = "SELECT * FROM sensores WHERE idsensor = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearSensor(sensorData) {
    const {
      nombre,
      modelo,
      numeroSerie,
      estado,
      especificaciones,
      marca,
      estaciones_idestacion,
    } = sensorData;
    const query =
      "INSERT INTO sensores (nombre, modelo, numeroSerie, estado, especificaciones, marca, estaciones_idestacion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      nombre,
      modelo,
      numeroSerie,
      estado,
      especificaciones,
      marca,
      estaciones_idestacion,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarSensor(id, sensorData) {
    const {
      nombre,
      modelo,
      numeroSerie,
      estado,
      especificaciones,
      marca,
      estaciones_idestacion,
    } = sensorData;
    const query =
      "UPDATE sensores SET nombre = $1, modelo = $2, numeroSerie = $3, estado = $4, especificaciones = $5, marca = $6, estaciones_idestacion = $7 WHERE idsensor = $8 RETURNING *";
    const values = [
      nombre,
      modelo,
      numeroSerie,
      estado,
      especificaciones,
      marca,
      estaciones_idestacion,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarSensor(id) {
    const query = "DELETE FROM sensores WHERE idsensor = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Sensor;
