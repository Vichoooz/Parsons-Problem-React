import React, { useEffect, useRef } from 'react';

const ParsonsExercise = () => {
  const parsonsRef = useRef(null);

  useEffect(() => {
    // Espera a que ParsonsWidget esté disponible
    const interval = setInterval(() => {
      if (window.ParsonsWidget) {
        clearInterval(interval);

        const parsons = new window.ParsonsWidget({
          sortableId: "sortable-code",
          trashId: "sortable-trash",
          maxWrongLines: 3,
        });

        const initialCode = [
          "def hello_world():",
          "    print('Hello, world!')",
        ];

        parsons.init(initialCode);

        if (parsonsRef.current) {
          parsonsRef.current.innerHTML = ""; // Limpia el contenedor
          parsons.render();
        }
      }
    }, 100);

    return () => clearInterval(interval); // Limpia el intervalo si el componente se desmonta
  }, []);

  return (
    <div>
      <div id="sortable-code" ref={parsonsRef}></div>
      <div id="sortable-trash"></div>
    </div>
  );
};

export default ParsonsExercise;
