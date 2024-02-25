import React from "react";
import imgwind from "/img/imgwind.png";

const DatosMeteorologicos = () => {
  // Simulación de datos provenientes de una base de datos
  const data = [
    {
      fechaHora: "2023-11-23 10:30",
      estacion: "Estación 1",
      temperatura: 25,
      humedad: 60,
      precipitacion: 10,
      presion: 1015,
      direccionViento: 180,
      velocidadViento: 5,
    },
    {
      fechaHora: "2023-11-23 11:30",
      estacion: "Estación 2",
      temperatura: 20,
      humedad: 55,
      precipitacion: 5,
      presion: 1012,
      direccionViento: 220,
      velocidadViento: 7,
    },
    {
      fechaHora: "2023-11-23 12:30",
      estacion: "Estación 3",
      temperatura: 19,
      humedad: 65,
      precipitacion: 15,
      presion: 1018,
      direccionViento: 150,
      velocidadViento: 4,
    },
    {
      fechaHora: "2023-11-23 12:30",
      estacion: "Estación 3",
      temperatura: 28,
      humedad: 65,
      precipitacion: 15,
      presion: 1018,
      direccionViento: 150,
      velocidadViento: 4,
    },
    {
      fechaHora: "2023-11-23 12:30",
      estacion: "Estación 3",
      temperatura: 28,
      humedad: 65,
      precipitacion: 15,
      presion: 1018,
      direccionViento: 150,
      velocidadViento: 4,
    },
    {
      fechaHora: "2023-11-23 12:30",
      estacion: "Estación 3",
      temperatura: 18,
      humedad: 65,
      precipitacion: 5,
      presion: 1018,
      direccionVieno: 150,
      velocidadViento: 4,
    },
    // Puedes agregar más objetos para simular más datos
  ];

  // Función para asignar una clase de color según el rango de temperatura

  const getColorClass = (temperatura) => {
    if (temperatura < 20) {
      return "text-blue-500";
    } else if (temperatura >= 20 && temperatura <= 25) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <>
      <div className="container mt-10 rounded-lg">
      

        <div className="shadow-xl px-5 py-2 bg-white">
          <div className="my-10">
            <h1>DATOS INSTANTÁNEOS PRINCIPALES</h1>
            <p>
              Los datos mostrados a continuación corresponden a mediciones
              tomadas a la hora, a excepción de la precipitación la cual
              corresponde a una suma horaria. La información se actualiza cada
              hora.
            </p>
          </div>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Fecha Hora (GMT-5)</th>
                <th>Estación</th>
                <th>T(°C)</th>
                <th>H(%)</th>
                <th>Pr(mm)</th>
                <th>Pa(Hpa)</th>
                <th>Wd(°)</th>
                <th>Ws(m/s)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.fechaHora}</td>
                  <td>{item.estacion}</td>
                  <td className={getColorClass(item.temperatura)}>
                    {item.temperatura}
                  </td>
                  <td>{item.humedad}</td>
                  <td>{item.precipitacion}</td>
                  <td>{item.presion}</td>
                  <td>{item.direccionViento}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <img className="w-10" src={imgwind} alt="" />
                      <p>{item.velocidadViento}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DatosMeteorologicos;
