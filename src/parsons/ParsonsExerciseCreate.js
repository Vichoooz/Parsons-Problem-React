import React, { useEffect } from "react";

export const createParsonsExercise = (initial, description, note) => {
  return () => {
    useEffect(() => {
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
        if (fb.errors.length > 0) {
          feedbackElement.textContent = "¡Incorrecto! Revisa tu solución.";
          feedbackElement.className =
            "text-red-600 text-center font-bold mt-4";
        } else {
          feedbackElement.textContent = "¡Correcto! Buen trabajo.";
          feedbackElement.className =
            "text-green-600 text-center font-bold mt-4";
        }
      };

      const clearFeedback = () => {
        const feedbackElement = document.getElementById("feedbackMessage");
        feedbackElement.textContent = "";
      };

      loadScripts();

      return () => {
        // Cleanup scripts si es necesario
      };
    }, []);

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
          <a
            href="#"
            id="newInstanceLink"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Nueva instancia.
          </a>
          <a
            href="#"
            id="feedbackLink"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
          >
            Revisar
          </a>
        </div>
        {/* Contenedor para mostrar los mensajes de feedback */}
        <div id="feedbackMessage" className="mt-4"></div>
      </div>
    );
  };
};
