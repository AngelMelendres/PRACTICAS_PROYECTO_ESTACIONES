import Blog from "../models/Blog.js";

export const obtenerBlogs = async (req, res) => {
  try {
    const blogs = await Blog.obtenerTodosLosBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerBlogPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.obtenerBlogPorId(id);
    if (!blog) {
      return res.status(404).json({ mensaje: "Blog no encontrado" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crearBlog = async (req, res) => {
  const blogData = req.body;
  try {
    const nuevoBlog = await Blog.crearBlog(blogData);
    res.status(201).json(nuevoBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarBlog = async (req, res) => {
  const { id } = req.params;
  const blogData = req.body;
  try {
    const blogActualizado = await Blog.actualizarBlog(id, blogData);
    if (!blogActualizado) {
      return res.status(404).json({ mensaje: "Blog no encontrado" });
    }
    res.json(blogActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blogEliminado = await Blog.eliminarBlog(id);
    if (!blogEliminado) {
      return res.status(404).json({ mensaje: "Blog no encontrado" });
    }
    res.json({ mensaje: "Blog eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
