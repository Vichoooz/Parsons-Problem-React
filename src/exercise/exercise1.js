import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `a = 200 <br>b = 33
if b > a:
  print("b es mayor que a")
elif a == b:
  print("a y b son iguales")
else:
  print("a es mayor que b")`;

const description = `Construye el código correcto reordenando las líneas de la izquierda a la derecha. 
El programa debe comparar dos números y mostrar cuál es mayor, si son iguales o diferentes.`;

const note = `Este ejercicio está diseñado como un ejemplo de rompecabezas de código con js-parsons. 
No está destinado a enseñar Python, sino a practicar el reordenamiento de bloques de código.`;

const Exercise1 = createParsonsExercise(initialCode, description, note);

export default Exercise1;
