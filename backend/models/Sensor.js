import { pool } from "../config/db.js";

class Sensor {
  static async obtenerTodosLosSensores() {
    const query = "SELECT * FROM sistemaweb.sensores";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerSensorPorId(id) {
    const query = "SELECT * FROM sistemaweb.sensores WHERE idsensor = $1";
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
      imagen,
    } = sensorData;
    const query =
      "INSERT INTO sistemaweb.sensores (nombre, modelo, numeroSerie, estado, especificaciones, marca, imagen) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      nombre,
      modelo,
      numeroSerie,
      estado,
      especificaciones,
      marca,
      imagen,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarSensor(id, sensorData) {
    const {
      nombre,
      modelo,
      numeroserie,
      estado,
      especificaciones,
      marca,
      imagen,
    } = sensorData;

    try {
      let query =
        "UPDATE sistemaweb.sensores SET nombre = $1, modelo = $2, numeroSerie = $3, estado = $4, especificaciones = $5, marca = $6";
      let values = [
        nombre,
        modelo,
        numeroserie,
        estado,
        especificaciones,
        marca,
      ];
      // Si hay imagen, añadir la actualización de la imagen a la consulta
      if (imagen) {
        query += ", imagen = $7";
        values.push(imagen);
      }

      // Añadir la condición de actualización basada en el idestacion
      values.push(id);
      query += " WHERE idsensor = $" + values.length + " RETURNING *";

      const { rows } = await pool.query(query, values);
      return rows[0];

    } catch (error) {
      throw new Error("Error al actualizar el sensor: " + error.message);
    }
  }

  static async eliminarSensor(id) {
    const query = "DELETE FROM sistemaweb.sensores WHERE idsensor = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Sensor;
