import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Modal from "react-modal";

import "leaflet/dist/leaflet.css";
import useEstaciones from "../../hooks/useEstaciones";
import Charts from "./Charts";

const Map = () => {
  const { estaciones } = useEstaciones();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Gráfico Modal"
        ariaHideApp={false} // Necesario para evitar un warning de accesibilidad
        style={{
          overlay: { zIndex: 1002 },
          content: {
            zIndex: 1002,
          },
        }}
      ><button
      className="btn bg-danger text-white font-bold"
      onClick={closeModal}
    >
      Cerrar Modal
    </button>
        <Charts />
        <button
          className="btn bg-danger text-white font-bold"
          onClick={closeModal}
        >
          Cerrar Modal
        </button>
      </Modal>

      <div className="w-2/3 mx-auto mt-10">
        <MapContainer
          center={[-1.65373, -78.677258]}
          zoom={8}
          style={{ height: "500px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {estaciones.map((estacion, index) => (
            <Marker
              key={index}
              position={[estacion.latitud, estacion.longitud]}
              style={{
                color: "red",
                fillOpacity: 0.7,
                radius: 10,
              }}
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
                    className="btn bg-blue-400 text-white font-bold rounded-sm mx-auto my-2"
                    onClick={openModal}
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

export default Map;
