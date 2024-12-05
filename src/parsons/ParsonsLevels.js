import React from 'react';
import { Link } from 'react-router-dom';

function ParsonsLevels() {
  // Simula una lista de niveles de ejercicios
  const levels = [
    { id: 1, name: 'Nivel 1: Básico' },
    { id: 2, name: 'Nivel 2: Intermedio' },
    { id: 3, name: 'Nivel 3: Avanzado' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Selecciona un Nivel</h2>
        <ul className="space-y-4">
          {levels.map((level) => (
            <li key={level.id}>
              <Link to={`/exercise/${level.id}`}>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600">
                  {level.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ParsonsLevels;
