import React, { useEffect } from "react";
import "../parsons.css"; // Asegúrate de que el archivo CSS esté en el lugar correcto

const ParsonsExercise = () => {
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
      const initial = 'def is_true(boolean_value):\n' +
                      '  if boolean_value:\n' +
                      '    return True\n' +
                      '  return False\n' +
                      '  return true #distractor\n' +
                      'print(Hola)';

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
        });
      document
        .getElementById("feedbackLink")
        .addEventListener("click", (event) => {
          event.preventDefault();
          parson.getFeedback();
        });
    };

    const displayErrors = (fb) => {
      if (fb.errors.length > 0) {
        alert(fb.errors[0]);
      }
    };

    loadScripts();

    return () => {
      // Cleanup scripts si es necesario
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Simple js-parsons example assignment
      </h2>
      <p className="text-gray-600 mb-4">
        Construct a function by drag & dropping and reordering lines from the
        left to the right. The constructed function should return True if the
        parameter is True and return False otherwise.
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Note:</strong> The correct solution is obviously a dumb way to
        do it. This exercise is merely trying to give an example of a Parson's
        puzzle with js-parsons, not teach you Python :)
      </p>
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
          New instance
        </a>
        <a
          href="#"
          id="feedbackLink"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
        >
          Get feedback
        </a>
      </div>
    </div>
  );
};

export default ParsonsExercise;
