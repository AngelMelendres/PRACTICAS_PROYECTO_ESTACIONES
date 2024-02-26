import Usuario from "../models/Usuario.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js";

const registrar = async (req, res) => {
  const { cedula, nombres, apellidos, email, password } = req.body;
  const usuarioData = {
    cedula,
    nombres,
    apellidos,
    email,
    password,
    estado: "inactivo",
    token: generarId(),
  };
  try {
    const existeUsuarioEmail = await Usuario.obtenerUsuarioPorEmail(email);
    const existeUsuarioCedula= await Usuario.obtenerUsuarioPorCedula(cedula);

    if (existeUsuarioEmail) {
      return res.status(400).json({ msg: "Usuario Email ya registrado" }); 
    }
    if (existeUsuarioCedula) {
      return res.status(400).json({ msg: "Usuario Cedula ya registrado" });
    }

    await Usuario.crearUsuario(usuarioData);

    res.json({ msg: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
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

  try {
    const passwordCorrecto = await Usuario.comprobarPassword(usuario, password);

    if (passwordCorrecto) {
      res.json({
        _cedula: usuario.cedula,
        nombre: usuario.nombres,
        email: usuario.email,
        token: generarJWT(usuario.cedula),
      });
    } else {
      const error = new Error("La contraseña es incorrecta");
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
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
