import { pool } from "../config/db.js";

class Imagen {
  static async obtenerTodasLasImagenes() {
    const query = "SELECT * FROM imagenes";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerImagenPorId(id) {
    const query = "SELECT * FROM imagenes WHERE idimagen = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearImagen(imagenData) {
    const {
      dirpath,
      estaciones_idestacion,
      sensores_idsensor,
      mantenimientos_idmantenimiento,
      blogs_id,
    } = imagenData;
    const query =
      "INSERT INTO imagenes (dirpath, estaciones_idestacion, sensores_idsensor, mantenimientos_idmantenimiento, blogs_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      dirpath,
      estaciones_idestacion,
      sensores_idsensor,
      mantenimientos_idmantenimiento,
      blogs_id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarImagen(id, imagenData) {
    const {
      dirpath,
      estaciones_idestacion,
      sensores_idsensor,
      mantenimientos_idmantenimiento,
      blogs_id,
    } = imagenData;
    const query =
      "UPDATE imagenes SET dirpath = $1, estaciones_idestacion = $2, sensores_idsensor = $3, mantenimientos_idmantenimiento = $4, blogs_id = $5 WHERE idimagen = $6 RETURNING *";
    const values = [
      dirpath,
      estaciones_idestacion,
      sensores_idsensor,
      mantenimientos_idmantenimiento,
      blogs_id,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarImagen(id) {
    const query = "DELETE FROM imagenes WHERE idimagen = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Imagen;
