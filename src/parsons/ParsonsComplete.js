import React from "react";

// Función para formatear el tiempo en mm:ss
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const saveLevelData = (level, errors, time) => {
  // Obtener los datos existentes del localStorage
  const existingData = JSON.parse(localStorage.getItem("gameData")) || {};

  // Verificar si ya hay datos guardados para este nivel
  const currentLevelData = existingData[level];

  // Si no hay datos para ese nivel o el tiempo actual es menor que el guardado, actualizar
  if (!currentLevelData || time < currentLevelData.time) {
    existingData[level] = { errors, time };
    localStorage.setItem("gameData", JSON.stringify(existingData));
  }
};



const ParsonsComplete = ({ timeTaken, errorsCount, onNextExercise }) => {
  console.log(timeTaken, errorsCount);
  saveLevelData(window.location.pathname, errorsCount, timeTaken);
  console.log(localStorage.getItem("gameData"))
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className="bg-white p-6 rounded shadow-lg w-96 text-center text-black">
        <h2 className="text-2xl font-bold mb-4">¡Ejercicio completado!</h2>
        <p className="text-lg mb-4">¡Felicidades! Has completado el ejercicio en:</p>
        <p className="text-xl font-semibold mb-4">{formatTime(timeTaken)}</p> {/* Mostrar el tiempo formateado */}
        <p className="text-lg mb-4">Errores cometidos: {errorsCount}</p> {/* Mostrar la cantidad de errores */}
        <button
          onClick={onNextExercise}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
        >
          Siguiente ejercicio
        </button>
      </div>
    </div>
  );
};

export default ParsonsComplete;
