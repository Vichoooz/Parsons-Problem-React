import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import exercises from './exercise/exercises'; // Importa el objeto de ejercicios
import Levels from './parsons/ParsonsLevels';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ParsonsLevels" element={<Levels />} />
        
        {/* Mapea las rutas dinámicamente a partir de los ejercicios */}
        {Object.keys(exercises).map((level) => (
          <Route
            key={level}
            path={`/exercise/${level}`}
            element={React.createElement(exercises[level])} // Usa React.createElement para renderizar dinámicamente el componente
          />
        ))}
            
      </Routes>
    </Router>
  );
}

export default App;
