import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `for numero in range(1, 11):
    if numero % 2 == 0:
        print(numero)
else #distractor
elif numero / 2 == 0: #distractor
for numero in numeros: #distractor
print(range(1, 11)) #distractor`;


const description = `Escribe un programa que muestre solo los números pares del 1 al 10 utilizando un bucle for.`;
const note = ``;

const Exercise30 = createParsonsExercise(initialCode, description, note);
export default Exercise30;