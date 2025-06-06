import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const getOrCreateUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = uuidv4(); // Generar un UUID único
    localStorage.setItem("userId", userId); // Guardarlo en el navegador
  }
  return userId;
};

const Home = () => {
  const [name, setName] = useState(localStorage.getItem("UserName") || "");
  const [showModal, setShowModal] = useState(!name);

  useEffect(() => {
    getOrCreateUserId();
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem("UserName", name);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white py-12">
    {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ingresa tu nombre completo o rol</h2>
            <input
              type="text"
              className="border p-2 rounded w-full text-black"
              placeholder="Escribe tu nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="bg-blue-600 text-black px-4 py-2 rounded mt-4 hover:bg-blue-500 transition"
              onClick={handleSaveName}
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <header className="bg-blue-600 text-white text-center p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-extrabold uppercase">¡Bienvenido a los Ejercicios de Parsons!</h1>
        <p className="mt-4 text-lg">Desarrolla tus habilidades en programación con ejercicios interactivos en Python.</p>
      </header>

      <section className="mt-16 flex flex-wrap justify-center gap-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
          <h2 className="text-xl font-semibold text-blue-600">¡Aprende Haciendo!</h2>
          <p className="mt-2 text-gray-600">Resuelve problemas interactivos y pon a prueba tus conocimientos de programación.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
          <h2 className="text-xl font-semibold text-blue-600">Ejercicios en Python</h2>
          <p className="mt-2 text-gray-600">Trabaja con fragmentos de código Python y construye soluciones paso a paso.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
          <h2 className="text-xl font-semibold text-blue-600">Retroalimentación en Tiempo Real</h2>
          <p className="mt-2 text-gray-600">Recibe comentarios instantáneos sobre tu progreso y mejora tus habilidades.</p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">¡Comienza ahora mismo!</h2>
        <Link
          to="/ParsonsLevels"
          className="bg-green-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-green-400 transition duration-300"
        >
          ¡Iniciar Ejercicio!
        </Link>
      </section>
    </div>
    </div>
  );
};

export default Home;
