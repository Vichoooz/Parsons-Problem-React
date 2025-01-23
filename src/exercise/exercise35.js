import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numeros = [4, -2, 7, -8, 10, -5, 3] <br> suma = 0 <br> contador = 0
for numero in numeros:
    if numero > 0:
        suma += numero <br> contador += 1
if contador > 0:
    promedio = suma / contador
    print("El promedio de los números positivos es:", promedio)
else:
    print("No hay números positivos en la lista.")`;


const description = `Escribe un programa que calcule el promedio de los números positivos en una lista, ignorando los negativos.`;
const note = ``;

const Exercise35 = createParsonsExercise(initialCode, description, note);
export default Exercise35;