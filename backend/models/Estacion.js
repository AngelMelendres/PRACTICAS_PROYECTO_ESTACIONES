import { pool } from "../config/db.js";

class Estacion {
  static async obtenerTodasLasEstaciones() {
    const query = "SELECT * FROM sistemaweb.estaciones";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerEstacionPorId(id) {
    const query = "SELECT * FROM sistemaweb.estaciones WHERE idestacion = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearEstacion(estacionData) {
    const {
      nombre,
      provincia,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
      imagen,
    } = estacionData;
    const query =
      "INSERT INTO sistemaweb.estaciones (nombre, provincia, canton, parroquia, longitud, latitud, altura, direccion, promotorTerreno, institucionACargo, manualAutomatica,imagen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12) RETURNING *";
    const values = [
      nombre,
      provincia,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorTerreno,
      institucionACargo,
      manualAutomatica,
      imagen,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarEstacion(id, estacionData) {
    const {
      nombre,
      provincia,
      canton,
      parroquia,
      longitud,
      latitud,
      altura,
      direccion,
      promotorterreno,
      institucionacargo,
      manualautomatica,
      imagen,
    } = estacionData;
    
    try {
      let query = "UPDATE sistemaweb.estaciones SET nombre = $1, provincia = $2, canton = $3, parroquia = $4, longitud = $5, latitud = $6, altura = $7, direccion = $8, promotorterreno = $9, institucionacargo = $10, manualautomatica = $11";
      let values = [
        nombre,
        provincia,
        canton,
        parroquia,
        longitud,
        latitud,
        altura,
        direccion,
        promotorterreno,
        institucionacargo,
        manualautomatica
      ];

      // Si hay imagen, añadir la actualización de la imagen a la consulta
      if (imagen) {
        query += ", imagen = $12";
        values.push(imagen);
      }

      // Añadir la condición de actualización basada en el idestacion
      values.push(id);
      query += " WHERE idestacion = $" + (values.length) + " RETURNING *";

      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw new Error("Error al actualizar la estación: " + error.message);
    }
}


  static async eliminarEstacion(id) {
    const query = "DELETE FROM sistemaweb.estaciones WHERE idestacion = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Estacion;
