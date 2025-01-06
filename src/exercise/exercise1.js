import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";


const initialCode = `num = int(input("Ingresa un número: "))
if num % 2 == 0:
    print("El número es par.")
else:
    print("El número es impar.")
if num % 0 == 2: #distractor`;


const description = `Escribe un programa que determine si un número es par o impar.`;
const note = `Este ejercicio te ayudará a practicar el uso de operadores aritméticos y condicionales.`;

const Exercise1 = createParsonsExercise(initialCode, description, note);

export default Exercise1;