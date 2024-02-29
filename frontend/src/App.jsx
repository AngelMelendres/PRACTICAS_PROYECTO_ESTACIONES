/* PROVIDERS */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EstacionesProvider } from "./context/EstacionesContext";
import { AuthProvider } from "./context/AuthContext";
import { SensoresProvider } from "./context/SensoresContext";
import { MantenimientosProvider } from "./context/MantenimientosContext";
import { EmpleadosProvider } from "./context/EmpleadosContext";

/* COMPONENTS */
import Estaciones from "./Pages/estaciones/Estaciones";
import Index from "./Pages/Index";
import RootLayout from "./Pages/layouts/RootLayout";
import Sensores from "./Pages/sensores/Sensores";
import Login from "./Pages/login/Login";
import NotFound from "./Pages/NotFound";
import EditarEstacion from "./Pages/estaciones/EditarEstacion";
import AgregarEstacion from "./Pages/estaciones/AgregarEstacion";
import PrivateRoute from "./Pages/layouts/PrivateRoute";
import Mantenimiento from "./Pages/mantenimiento/mantenimiento";
import AgregarMantenimiento from "./Pages/mantenimiento/AgregarMantenimiento";
import DatosMeteorologicos from "./Pages/estaciones/DatosMeteorologicos";
import AgregarSensor from "./Pages/sensores/AgregarSensor";
import EditarSensor from "./Pages/sensores/EditarSensor";
import EditarMantenimiento from "./Pages/mantenimiento/EditarMantenimiento";
import Empleados from "./Pages/empleados/Empleados";
import AgregarEmpleado from "./Pages/empleados/AgregarEmpleado";
import EditarEmpleado from "./Pages/empleados/EditarEmpleado";
import Contacto from "./Pages/contacto/Contacto";
import Administradores from "./Pages/administradores/Administradores";
import Perfil from "./Pages/perfil/Perfil";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EstacionesProvider>
          <SensoresProvider>
            <MantenimientosProvider>
              <EmpleadosProvider>
                <RootLayout>
                  <Routes>
                    <Route path="/" exact element={<Index />} />
                    <Route path="/estaciones" exact element={<Estaciones />} />
                    <Route path="/sensores" exact element={<Sensores />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route
                      path="/datosMeteorologicos"
                      element={<DatosMeteorologicos />}
                    ></Route>
                    <Route
                      path="/mantenimiento"
                      element={<Mantenimiento />}
                    ></Route>
                    <Route
                      path="/administradores"
                      element={<Administradores />}
                    ></Route>
                    <Route path="/perfil" element={<Perfil />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/empleados" element={<Empleados />}></Route>

                    {/* RUTAS PROTEGIDAS */}
                    <Route element={<PrivateRoute />}>
                      <Route
                        path="/estaciones/crear"
                        element={<AgregarEstacion />}
                      ></Route>
                      <Route
                        path="/estaciones/editar/:id"
                        element={<EditarEstacion />}
                      ></Route>
                      <Route
                        path="/sensores/crear"
                        element={<AgregarSensor />}
                      ></Route>
                      <Route
                        path="/sensores/editar/:id"
                        element={<EditarSensor />}
                      ></Route>

                      <Route
                        path="/mantenimiento/crear"
                        element={<AgregarMantenimiento />}
                      ></Route>

                      <Route
                        path="/mantenimiento/editar/:id"
                        element={<EditarMantenimiento />}
                      ></Route>

                      <Route
                        path="/empleados/crear"
                        element={<AgregarEmpleado />}
                      ></Route>

                      <Route
                        path="/empleados/editar/:id"
                        element={<EditarEmpleado />}
                      ></Route>
                    </Route>

                    {/* RUTA $404 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </RootLayout>
              </EmpleadosProvider>
            </MantenimientosProvider>
          </SensoresProvider>
        </EstacionesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
