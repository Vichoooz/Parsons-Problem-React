import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ParsonsComplete from "./ParsonsComplete"; // Importa el componente ParsonsComplete

export const createParsonsExercise = (initial, description, note) => {
  return () => {
    const navigate = useNavigate();

    // Estado para almacenar el tiempo transcurrido, errores cometidos y si la respuesta es correcta
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false); // Para verificar si la respuesta es correcta
    const [showPopup, setShowPopup] = useState(false); // Para mostrar el popup
    const [errorsCount, setErrorsCount] = useState(0); // Para contar los errores cometidos
    const lastExecutionTimeRef = useRef(0);

    useEffect(() => {
      // Iniciar el temporizador cuando el componente se carga
      const startTime = Date.now();
      const intervalId = setInterval(() => {
        if (!isCorrect) {
          const currentElapsedTime = Math.floor((Date.now() - startTime) / 1000);
          setElapsedTime(currentElapsedTime);
        }
      }, 1000);

      const loadScripts = async () => {
        await Promise.all([ 
          loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"),
          loadScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"),
          loadScript("../lib/underscore-min.js"),
          loadScript("../lib/lis.js"),
          loadScript("../lib/parsons.js"),
        ]);
        initializeParsons();
      };

      const loadScript = (src) =>
        new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });

      const initializeParsons = () => {
        const parson = new window.ParsonsWidget({
          sortableId: "sortable",
          trashId: "sortableTrash",
          maxWrongLines: 1,
          feedback_cb: displayErrors,
        });

        parson.init(initial);
        parson.shuffleLines();

        // Eventos de los botones
        document
          .getElementById("newInstanceLink")
          .addEventListener("click", (event) => {
            event.preventDefault();
            parson.shuffleLines();
            clearFeedback();
          });
        document
          .getElementById("feedbackLink")
          .addEventListener("click", (event) => {
            event.preventDefault();
            parson.getFeedback();
          });
      };

      const displayErrors = (fb) => {
        const feedbackElement = document.getElementById("feedbackMessage");

        const currentTime = Date.now();
        if (currentTime - lastExecutionTimeRef.current < 1000) {
          return; // Si la diferencia de tiempo es menor a 1 segundos, no ejecutar la función
        }

        lastExecutionTimeRef.current = currentTime;

        console.log(fb.errors);

        if (fb.errors.length > 0 && !isCorrect) {
          feedbackElement.textContent = "¡Incorrecto! Revisa tu solución.";
          feedbackElement.className =
            "text-red-600 text-center font-bold mt-4";
          setErrorsCount((prev) => prev + 1);

        } else if (fb.errors.length === 0 && !isCorrect) {
          feedbackElement.textContent = "¡Correcto! Buen trabajo.";
          feedbackElement.className =
            "text-green-600 text-center font-bold mt-4";

          // Detener el temporizador si la respuesta es correcta
          setIsCorrect(true);
          setShowPopup(true); // Mostrar el popup cuando se complete correctamente
          
        }
      };

      const clearFeedback = () => {
        const feedbackElement = document.getElementById("feedbackMessage");
        feedbackElement.textContent = "";
      };

      loadScripts();

      return () => {
        clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
      };
    }, [isCorrect]); // Dependencia de isCorrect para detener el temporizador

    const goToPrevious = () => {
      const currentPath = window.location.pathname;
      const currentExercise = parseInt(currentPath.split("/").pop(), 10);
      if (currentExercise > 1) {
        navigate(`/exercise/${currentExercise - 1}`); // Asegurarse de restar uno correctamente
      }
    };

    const goToNext = () => {
      const currentPath = window.location.pathname;
      const currentExercise = parseInt(currentPath.split("/").pop(), 10);
      navigate(`/exercise/${currentExercise + 1}`); // Asegurarse de sumar uno correctamente
    };

    const handleNextExercise = () => {
      setShowPopup(false); // Cerrar el popup
      goToNext(); // Ir al siguiente ejercicio
    };

    // Función para formatear el tiempo en mm:ss
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    

    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Parsons Problems</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {note && (
          <p className="text-gray-600 mb-6">
            <strong>Note:</strong> {note}
          </p>
        )}
        <div className="flex gap-4">
          <div
            id="sortableTrash"
            className="sortable-code bg-gray-100 p-4 rounded shadow-md w-full"
          ></div>
          <div
            id="sortable"
            className="sortable-code bg-gray-100 p-4 rounded shadow-md w-full"
          ></div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            id="newInstanceLink"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Nueva instancia.
          </button>
          <button
            id="feedbackLink"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
          >
            Revisar
          </button>
        </div>

        {/* Contenedor para mostrar los mensajes de feedback */}
        <div id="feedbackMessage" className="mt-4"></div>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400"
          >
            Anterior
          </button>
          <button
            onClick={goToNext}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Siguiente
          </button>
        </div>

        {/* Mostrar el tiempo transcurrido en formato mm:ss */}
        <div className="mt-4 text-center">
          <p>Tiempo transcurrido: {formatTime(elapsedTime)}</p>
        </div>

        {/* Mostrar el número de errores cometidos */}
        <div className="mt-4 text-center">
          <p>Errores cometidos: {errorsCount}</p>
        </div>

        {/* Mostrar el popup cuando el ejercicio se completa correctamente */}
        {showPopup && (
      <ParsonsComplete 
            timeTaken={elapsedTime} 
            errorsCount={errorsCount}  // Pasar el número de errores
            onNextExercise={handleNextExercise} 
          />
)}

      </div>
    );
  };
};
