/* import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js";

const registrar = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuarioData = { ...req.body, token: generarId() };
    await Usuario.crearUsuario(usuarioData);

    emailRegistro({
      email: usuarioData.email,
      nombre: usuarioData.nombre,
      token: usuarioData.token,
    });

    res.json({
      msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta",
    });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (!usuario.confirmado) {
    const error = new Error("Tu Cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }
   
  if (await Usuario.comprobarPassword(usuario, password)) {
    res.json({
      _id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario.id),
    });
  } else {
    const error = new Error("El Password es Incorrecto");
    return res.status(403).json({ msg: error.message });
  } 
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const { id } = req.body;

  try {
    const usuarioConfirmado = await Usuario.actualizarUsuarioConfirmado(
      id,
      token
    );
    if (!usuarioConfirmado) {
      const error = new Error("Token no válido");
      return res.status(403).json({ msg: error.message });
    }

    res.json({ msg: "Usuario Confirmado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const tokenOlvidePassword = generarId();
    await Usuario.actualizarTokenOlvidePassword(
      usuario.id,
      tokenOlvidePassword
    );

    emailOlvidePassword({
      email: usuario.email,
      nombre: usuario.nombre,
      token: tokenOlvidePassword,
    });

    res.json({ msg: "Hemos enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error);
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const usuario = await Usuario.findOne({ token });

  if (usuario) {
    res.json({ msg: "Token válido y el Usuario existe" });
  } else {
    const error = new Error("Token no válido");
    return res.status(404).json({ msg: error.message });
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const usuario = await Usuario.actualizarPassword(token, password);
    if (!usuario) {
      const error = new Error("Token no válido");
      return res.status(404).json({ msg: error.message });
    }

    res.json({ msg: "Password Modificado Correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;

  res.json(usuario);
};

export {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
 */

import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js";

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.obtenerTodosLosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerUsuarioPorEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const usuario = await Usuario.obtenerUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registrar = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuarioData = { ...req.body, token: generarId() };
    await Usuario.crearUsuario(usuarioData);

    emailRegistro({
      email: usuarioData.email,
      nombre: usuarioData.nombre,
      token: usuarioData.token,
    });

    res.json({
      msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  if (!usuario.confirmado) {
    const error = new Error("Tu Cuenta no ha sido confirmada");
    return res.status(403).json({ msg: error.message });
  }

  try {
    const passwordCorrecto = await Usuario.comprobarPassword(usuario, password);

    if (passwordCorrecto) {
      res.json({
        _id: usuario.idusuarios,
        nombre: usuario.nombres,
        email: usuario.email,
        token: generarJWT(usuario.idusuarios),
      });
    } else {
      const error = new Error("El Password es Incorrecto");
      res.status(403).json({ msg: error.message });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al autenticar el usuario" });
  }
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const { id } = req.body;

  try {
    const usuarioConfirmado = await Usuario.actualizarUsuarioConfirmado(
      id,
      token
    );
    if (!usuarioConfirmado) {
      const error = new Error("Token no válido");
      return res.status(403).json({ msg: error.message });
    }

    res.json({ msg: "Usuario Confirmado Correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al confirmar el usuario" });
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.obtenerUsuarioPorEmail(email);

  if (!usuario) {
    const error = new Error("El Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  try {
    const tokenOlvidePassword = generarId();
    await Usuario.actualizarTokenOlvidePassword(
      usuario.idusuarios,
      tokenOlvidePassword
    );

    emailOlvidePassword({
      email: usuario.email,
      nombre: usuario.nombres,
      token: tokenOlvidePassword,
    });

    res.json({ msg: "Hemos enviado un email con las instrucciones" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Error al enviar el email para olvidar la contraseña" });
  }
};

const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const usuario = await Usuario.findOne({ token });

  if (usuario) {
    res.json({ msg: "Token válido y el Usuario existe" });
  } else {
    const error = new Error("Token no válido");
    res.status(404).json({ msg: error.message });
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const usuario = await Usuario.actualizarPassword(token, password);
    if (!usuario) {
      const error = new Error("Token no válido");
      return res.status(404).json({ msg: error.message });
    }

    res.json({ msg: "Password Modificado Correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al modificar la contraseña" });
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;

  res.json(usuario);
};

export {
  obtenerUsuarios,
  obtenerUsuarioPorEmail,
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
