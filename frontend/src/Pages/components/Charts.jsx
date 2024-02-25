import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Datos Climáticos",
    },
  },
};

const tiempo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const temperaturaData = {
  labels: tiempo,
  datasets: [
    {
      label: "Temperatura Máxima (°C)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [30, 32, 28, 35, 33, 31, 29],
    },
    {
      label: "Temperatura Mínima (°C)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: [15, 18, 14, 20, 17, 16, 19],
    },
    {
      label: "Temperatura Normal (°C)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      data: [22, 25, 20, 28, 25, 23, 24],
    },
  ],
};

const humedadData = {
  labels: tiempo,
  datasets: [
    {
      label: "Humedad Máxima (%)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [80, 75, 85, 78, 82, 79, 81],
    },
    {
      label: "Humedad Mínima (%)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: [60, 55, 58, 62, 59, 61, 57],
    },
    {
      label: "Humedad Normal (%)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      data: [70, 65, 70, 68, 72, 71, 69],
    },
  ],
};

const precipitacionData = {
  labels: tiempo,
  datasets: [
    {
      label: "Precipitación (mm)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [10, 5, 15, 8, 12, 10, 14],
    },
  ],
};

const Charts = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <div>
          <p>Temperatura</p>
          <div className="border-2 border-blue-600 p-5">
            <Bar options={options} data={temperaturaData} />
          </div>
        </div>
        <div>
          <p>Humedad del Aire</p>
          <div className="border-2 border-blue-600 p-5">
            <Bar options={options} data={humedadData} />
          </div>
        </div>
        <div>
          <p>Precipitación</p>
          <div className="border-2 border-blue-600 p-5">
            <Bar options={options} data={precipitacionData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
