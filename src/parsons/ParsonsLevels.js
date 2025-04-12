import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ParsonsLevels() {
  // Simula una lista de niveles de ejercicios con tipos específicos
  const levels = Array.from({ length: 35 }, (_, index) => {
    const levelNum = index + 1;
    let exerciseType = '';
    
    if (levelNum <= 15) {
      exerciseType = 'if';
    } else if (levelNum <= 25) {
      exerciseType = 'while';
    } else {
      exerciseType = 'for';
    }
    
    return {
      id: levelNum,
      name: `Nivel ${levelNum}`,
      type: exerciseType,
    };
  });

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

  // Función para determinar el color basado en el tipo de ejercicio
  const getButtonColor = (type) => {
    switch(type) {
      case 'if':
        return 'bg-green-500 hover:bg-green-600';
      case 'while':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'for':
        return 'bg-purple-500 hover:bg-purple-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Selecciona un Nivel</h2>
        
        {/* Leyenda de tipos de ejercicios */}
        <div className="flex justify-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 mr-2"></div>
            <span>Ejercicios IF (1-15)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
            <span>Ejercicios WHILE (16-25)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 mr-2"></div>
            <span>Ejercicios FOR (26-35)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-6 justify-center">
          {currentLevels.map((level) => (
            <Link key={level.id} to={`/exercise/${level.id}`}>
              <div className={`${getButtonColor(level.type)} text-white py-8 px-8 rounded-xl shadow-md text-center text-lg font-semibold`}>
                {level.name}
                <div className="text-sm mt-1">({level.type})</div>
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