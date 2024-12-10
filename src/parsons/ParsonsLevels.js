import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ParsonsLevels() {
  // Simula una lista de niveles de ejercicios
  const levels = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Nivel ${index + 1}`,
  }));

  // Número de niveles por página
  const levelsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los niveles que se deben mostrar en la página actual
  const indexOfLastLevel = currentPage * levelsPerPage;
  const indexOfFirstLevel = indexOfLastLevel - levelsPerPage;
  const currentLevels = levels.slice(indexOfFirstLevel, indexOfLastLevel);

  // Función para manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(levels.length / levelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Selecciona un Nivel</h2>
        <div className="grid grid-cols-4 gap-4 justify-center">
          {currentLevels.map((level) => (
            <Link key={level.id} to={`/exercise/${level.id}`}>
              <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 text-center">
                {level.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Paginación */}
        <div className="mt-6">
          <ul className="flex justify-center space-x-2">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`py-2 px-4 rounded-lg ${currentPage === number ? 'bg-blue-600' : 'bg-blue-500'} text-white hover:bg-blue-700`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ParsonsLevels;
