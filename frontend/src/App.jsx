import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EstacionesProvider } from "./context/EstacionesContext";
import { AuthProvider } from "./context/AuthContext";
import Estaciones from "./Pages/estaciones/Estaciones";
import Index from "./Pages/Index";
import RootLayout from "./Pages/layouts/RootLayout";
import Sensores from "./Pages/sensores/Sensores";
import Login from "./Pages/login/Login";
import NotFound from "./Pages/NotFound";
import EditarEstacion from "./Pages/estaciones/EditarEstacion";
import AgregarEstacion from "./Pages/estaciones/AgregarEstacion";
import PrivateRoute from "./Pages/layouts/PrivateRoute";
import Charts from "./Pages/components/Charts";
import Mantenimiento from "./Pages/mantenimiento/mantenimiento";
import AgregarMantenimiento from "./Pages/mantenimiento/AgregarMantenimiento";
import EquipoTecnico from "./Pages/equipoTecnico/EquipoTecnico";
import AgregarEquipoTecnico from "./Pages/equipoTecnico/AgregarEquipoTecnico";
import DatosMeteorologicos from "./Pages/estaciones/DatosMeteorologicos";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EstacionesProvider>
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

              <Route path="/equipoTecnico" element={<EquipoTecnico />}></Route>

              <Route path="/chart" element={<Charts />}></Route>

              <Route path="/mantenimiento" element={<Mantenimiento />}></Route>
              <Route element={<PrivateRoute />}>
                <Route
                  path="/estaciones/crear"
                  element={<AgregarEstacion />}
                ></Route>
                <Route path="/editar" element={<EditarEstacion />}></Route>
                <Route
                  path="/mantenimiento/crear"
                  element={<AgregarMantenimiento />}
                ></Route>
                <Route
                  path="/equipoTecnico/crear"
                  element={<AgregarEquipoTecnico />}
                ></Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </RootLayout>
        </EstacionesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
