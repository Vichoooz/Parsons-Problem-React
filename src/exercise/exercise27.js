import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `n = int(input("Ingresa un número: "))
suma = 0
for i in range(1, n + 1):
    suma += i
print("La suma es:", suma)`;

const description = `rea un programa que solicite un número al usuario y calcule la suma de todos los números desde 1 hasta el número ingresado utilizando un bucle for`;
const note = `Ejemplo: si el usuario ingresa 5, el programa debe mostrar "La suma es: 15" (1 + 2 + 3 + 4 + 5 = 15).`;

const Exercise27 = createParsonsExercise(initialCode, description, note);
export default Exercise27;