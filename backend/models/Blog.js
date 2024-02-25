import { pool } from "../config/db.js";

class Blog {
  static async obtenerTodosLosBlogs() {
    const query = "SELECT * FROM blogs";
    const { rows } = await pool.query(query);
    return rows;
  }

  static async obtenerBlogPorId(id) {
    const query = "SELECT * FROM blogs WHERE id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async crearBlog(blogData) {
    const { titulo, contenido, fecha, usuarios_idusuarios } = blogData;
    const query =
      "INSERT INTO blogs (titulo, contenido, fecha, usuarios_idusuarios) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo, contenido, fecha, usuarios_idusuarios];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async actualizarBlog(id, blogData) {
    const { titulo, contenido, fecha, usuarios_idusuarios } = blogData;
    const query =
      "UPDATE blogs SET titulo = $1, contenido = $2, fecha = $3, usuarios_idusuarios = $4 WHERE id = $5 RETURNING *";
    const values = [titulo, contenido, fecha, usuarios_idusuarios, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async eliminarBlog(id) {
    const query = "DELETE FROM blogs WHERE id = $1 RETURNING *";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

export default Blog;
