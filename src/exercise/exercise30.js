import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for numero in numeros:
    if numero % 2 == 0:
        print(numero)
else #distractor
elif numero % 0 == 2: #distractor
for numero in numeros #distractor
print(numeros) #distractor`;

const description = `Escribe un programa que recorra una lista de números y muestre solo los números pares utilizando un bucle for.`;
const note = ``;

const Exercise30 = createParsonsExercise(initialCode, description, note);
export default Exercise30;