import { pool } from "../config/db.js";

class Empleado {
  static async obtenerTodosLosEmpleados() {
    const query = "SELECT * FROM empleados";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerEmpleadoPorId(id) {
    const query = "SELECT * FROM empleados WHERE idempleado = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearEmpleado(empleadoData) {
    const { nombres, apellidos, email, cargo, imagen } = empleadoData;
    const query =
      "INSERT INTO empleados (nombres, apellidos, email, cargo, imagen) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [nombres, apellidos, email, cargo, imagen];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarEmpleado(id, empleadoData) {
    const { nombres, apellidos, email, cargo, imagen } = empleadoData;

    try {
      let query =
        "UPDATE empleados SET nombres = $1, apellidos = $2, email = $3, cargo = $4";
      let values = [nombres, apellidos, email, cargo];
      // Si hay imagen, añadir la actualización de la imagen a la consulta
      if (imagen) {
        query += ", imagen = $5";
        values.push(imagen);
      }

      // Añadir la condición de actualización basada en el idempleado
      values.push(id);
      query += " WHERE idempleado = $" + values.length + " RETURNING *";

      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw new Error("Error al actualizar el empleado: " + error.message);
    }
  }

  static async eliminarEmpleado(id) {
    const query = "DELETE FROM empleado WHERE idempleado = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Empleado;
