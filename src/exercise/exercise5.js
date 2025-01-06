import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `num = int(input("Ingresa un número: "))
if num > 0:
  print("Positivo") 
elif num < 0: 
  print("Negativo")
else: 
  print("Cero")`;

const description = `El código debe clasificar un número como "Positivo" si es mayor que 0, "Negativo" si es menor que 0, y "Cero" si es igual a 0.`;

const note = `Este ejercicio tiene como objetivo practicar el uso de condicionales simples en Python.`;

// Usa createParsonsExercise para crear el componente del ejercicio
const Exercise5 = createParsonsExercise(initialCode, description, note);

export default Exercise5;
