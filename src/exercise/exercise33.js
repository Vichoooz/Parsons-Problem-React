import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numeros = [3, 7, 2, 9, 5, 1]
mayor = numeros[0]
for numero in numeros:
    if numero > mayor:
        mayor = numero
print("El número más grande es:", mayor)
else: #distractor`;


const description = `Crea un programa que encuentre el número más grande en una lista con un bucle for.`;
const note = ``;

const Exercise33 = createParsonsExercise(initialCode, description, note);
export default Exercise33;