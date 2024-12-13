import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `num = int(input("Ingresa un número: "))
if num > 0:`;

const description = `Construye un código arrastrando y ordenando líneas desde la izquierda hacia la derecha.
El código debe clasificar un número como "Positivo" si es mayor que 0, "Negativo" si es menor que 0, y "Cero" si es igual a 0.`;

const note = `Este ejercicio tiene como objetivo practicar el uso de condicionales simples en Python.`;

// Usa createParsonsExercise para crear el componente del ejercicio
const Exercise3 = createParsonsExercise(initialCode, description, note);

export default Exercise3;
