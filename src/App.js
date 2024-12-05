import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

import Exercise1 from './exercise/exercise1'; // Ruta para el ejercicio 1
import Exercise2 from './exercise/exercise2';
import Levels from './parsons/ParsonsLevels';
import ParsonsExercise from './parsons/ParsonsExercise';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ParsonsLevels" element={<Levels />} />
        <Route path="/exercise/1" element={<Exercise1 />} />
        <Route path="/exercise/2" element={<Exercise2 />} />
        <Route path='Test' element={<ParsonsExercise />} />
      
      </Routes>
    </Router>
  );
}

export default App;
