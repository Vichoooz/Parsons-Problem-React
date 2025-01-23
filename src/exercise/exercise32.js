import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = int(input("Ingresa un número: ")) <br> factorial = 1
for i in range(1, numero + 1):
    factorial *= i
print("El factorial de", numero, "es:", factorial)
factorial = factorial + 1 #distractor`;


const description = `Escribe un programa que calcule el factorial de un número ingresado por el usuario.`;
const note = `Ejemplo: el factorial de 5 es 120 (5 x 4 x 3 x 2 x 1).`;

const Exercise32 = createParsonsExercise(initialCode, description, note);
export default Exercise32;