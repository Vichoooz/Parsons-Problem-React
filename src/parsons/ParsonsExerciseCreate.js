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
    const [record, setRecord] = useState({ time: null, errors: null }); // Estado para el récord

    const lastExecutionTimeRef = useRef(0);

    useEffect(() => {
      // Cargar los datos del nivel actual desde localStorage
      const level = window.location.pathname;
      const levelData = getLevelData(level);

      if (levelData) {
        setRecord(levelData); // Actualiza el récord si existe
      }
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
        let NoSumarError = false;
        const currentTime = Date.now();
        if (currentTime - lastExecutionTimeRef.current < 1000) {
          NoSumarError = true;
        }
        lastExecutionTimeRef.current = currentTime;

        console.log(fb.errors);

        if (fb.errors.length > 0 && !isCorrect && !NoSumarError) {
          if (fb.errors[0] === "Your program has too few code fragments.") {
            feedbackElement.textContent = "¡Tu programa tiene muy pocos fragmentos de código!";
            feedbackElement.className = "text-red-600 text-center font-bold mt-4";
          }
          else if (fb.errors[0] === "Code fragments in your program are wrong, or in wrong order. This can be fixed by moving, removing, or replacing highlighted fragments.") {
            feedbackElement.textContent = "¡Los fragmentos de código en tu programa son incorrectos o están en el orden incorrecto!";
            feedbackElement.className = "text-red-600 text-center font-bold mt-4";
          }
          else {
            feedbackElement.textContent = "¡Incorrecto! Revisa tu solución.";
            feedbackElement.className = "text-red-600 text-center font-bold mt-4";
          }
          setErrorsCount((prev) => prev + 1);

        } else if (fb.errors.length === 0 && !isCorrect) {
          feedbackElement.textContent = "¡Correcto! Buen trabajo.";
          feedbackElement.className =
            "text-green-600 text-center font-bold mt-4";

          // Detener el temporizador si la respuesta es correcta
          setErrorsCount((prev) => prev - 1);
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
        navigate(`/Parsons-Problem-React/exercise/${currentExercise - 1}`); // Asegurarse de restar uno correctamente
      }
    };

    const goToNext = () => {
      const currentPath = window.location.pathname;
      const currentExercise = parseInt(currentPath.split("/").pop(), 10);
      navigate(`/Parsons-Problem-React/exercise/${currentExercise + 1}`); // Asegurarse de sumar uno correctamente
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
    const getLevelData = (level) => {
      const gameData = JSON.parse(localStorage.getItem("gameData")) || {};
      return gameData[level] || { errors: 0, time: 0 }; // Valores por defecto
    };
    

    return (
      <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white flex flex-col items-center py-12">
        <div className="bg-white max-w-6xl w-full p-8 rounded-lg shadow-lg">
          {/* Encabezado */}
          <header className="text-center">
            <h2 className="text-4xl font-bold text-blue-600">Parsons Problems</h2>
            <p className="mt-2 text-lg text-black">
              {description || "Practica tus habilidades en programación interactiva."}
            </p>
            {note && (
              <p className="mt-2 text-lg text-black">
              <strong>Nota:</strong> {note}
            </p>

            )}
          </header>
    
          {/* Récord */}
          {record.time !== null && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-center text-lg font-bold text-gray-800">Récord Personal</h3>
              <p className="text-center text-gray-600 mt-2">
                Tiempo más rápido:{" "}
                <span className="font-semibold">
                  {record.time === 0 ? "---" : formatTime(record.time)}
                </span>
              </p>
              <p className="text-center text-gray-600">
                Menor número de errores:{" "}
                <span className="font-semibold">
                  {record.errors === 0 ? "---" : record.errors}
                </span>
              </p>
            </div>
          )}
    
          {/* Zona interactiva */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div
              id="sortableTrash"
              className="sortable-code bg-gray-100 p-6 rounded-lg shadow-md w-full text-black"
            ></div>
            <div
              id="sortable"
              className="sortable-code bg-gray-100 p-6 rounded-lg shadow-md w-full text-black"
            ></div>
          </div>
    
          {/* Botones de acción */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              id="newInstanceLink"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500"
            >
              Nueva instancia
            </button>
            <button
              id="feedbackLink"
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500"
            >
              Revisar
            </button>
          </div>
    
          {/* Feedback */}
          <div
            id="feedbackMessage"
            className="mt-4 text-center text-lg font-semibold"
          ></div>
    
          {/* Botones de navegación */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-500"
            >
              Anterior
            </button>
            <button
              onClick={goToNext}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500"
            >
              Siguiente
            </button>
          </div>
    
          {/* Tiempo y errores */}
          <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <p className="text-gray-600">
              <strong>Tiempo transcurrido:</strong>{" "}
              <span className="text-blue-600 font-semibold">
                {formatTime(elapsedTime)}
              </span>
            </p>
            <p className="text-gray-600">
              <strong>Errores cometidos:</strong>{" "}
              <span className="text-red-600 font-semibold">{errorsCount}</span>
            </p>
          </div>
        </div>
    
        {/* Popup al completar el ejercicio */}
        {showPopup && (
          <ParsonsComplete
            timeTaken={elapsedTime}
            errorsCount={errorsCount}
            onNextExercise={handleNextExercise}
          />
        )}
      </div>
    );
  };    
};
