import { pool } from "../config/db.js";

class Estacion {
  static async obtenerTodasLasEstaciones() {
    const query = "SELECT * FROM estaciones";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerEstacionPorId(id) {
    const query = "SELECT * FROM estaciones WHERE idestacion = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearEstacion(estacionData) {
    const {
      nombre,
      ciudad,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
    } = estacionData;
    const query =
      "INSERT INTO estaciones (nombre, ciudad, canton, parroquia, longitud, latitud, altura, direccion, promotorTerreno, institucionACargo, manualAutomatica) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *";
    const values = [
      nombre,
      ciudad,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarEstacion(id, estacionData) {
    const {
      nombre,
      ciudad,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
    } = estacionData;
    const query =
      "UPDATE estaciones SET nombre = $1, ciudad = $2, canton = $3, parroquia = $4, longitud = $5, latitud = $6, altura = $7, direccion = $8, promotorTerreno = $9, institucionACargo = $10, manualAutomatica = $11 WHERE idestacion = $12 RETURNING *";
    const values = [
      nombre,
      ciudad,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarEstacion(id) {
    const query = "DELETE FROM estaciones WHERE idestacion = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Estacion;
