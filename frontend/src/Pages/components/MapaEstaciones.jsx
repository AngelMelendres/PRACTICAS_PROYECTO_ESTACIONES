import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Modal from "react-modal";
import Charts from "./Charts";

import "leaflet/dist/leaflet.css";

const MapaEstaciones = ({ estaciones }) => {
  const [estacioness,setEstacioness] = useState([])
  useEffect(() => {
    setEstacioness(estaciones);
  },[])

  // Estado para manejar el modal abierto de cada marcador
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  return (
    <>
      <Modal
        isOpen={modalIndex !== null}
        onRequestClose={closeModal}
        contentLabel="Gráfico Modal"
        ariaHideApp={false} // Necesario para evitar un warning de accesibilidad
        style={{
          overlay: { zIndex: 1002 },
          content: {
            zIndex: 1002,
          },
        }}
      >
        <button
          className="btn bg-danger text-white font-bold"
          onClick={closeModal}
        >
          Cerrar Modal
        </button>
        {modalIndex !== null && <Charts data={estaciones[modalIndex]} />}
      </Modal>

      <div className="w-2/3 mx-auto mt-10">
        <MapContainer
          center={[-1.65373, -78.677258]}
          zoom={6.5}
          style={{ height: "600px", width: "90%", margin: "0 auto" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {estacioness.map((estacion, index) => (
            <Marker
              key={index}
              position={[estacion.latitud, estacion.longitud]}
            >
              <Popup>
                <div>
                  <strong>{estacion.nombre}</strong>
                  <ul>
                    <li>
                      <strong>Codigo:</strong> {estacion.parroquia}
                    </li>
                    <li>
                      <strong>Provincia:</strong> {estacion.provincia}
                    </li>
                    <li>
                      <strong>Cantón:</strong> {estacion.canton}
                    </li>
                    <li>
                      <strong>Propietario:</strong> ESPOCH
                    </li>
                    <li>
                      <strong>Latitud:</strong> {estacion.latitud}
                    </li>
                    <li>
                      <strong>Longitud:</strong> {estacion.longitud}
                    </li>
                    <li>
                      <strong>Altura:</strong> {estacion.altura} m
                    </li>
                    <li>
                      <strong>Estado:</strong> {estacion.estado}
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(index)}
                  >
                    Ver Datos
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default MapaEstaciones;
