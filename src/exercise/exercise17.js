import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `n = int(input("Ingresa un número: ")) <br> suma = 0 <br> i = 1
n = int(input("Ingresa un número: ")) <br> suma = i <br> i = 1 #distractor
n = int(input("Ingresa un número: ")) <br> suma = 0 <br> i = 0 #distractor
while i <= n:
    suma += i  
    i += 1
    suma = i + suma #distractor
n = i   #distractor
print("La suma final es:", suma)
`;

const description = `Crea un programa que solicite un número al usuario y calcule la suma de todos los números desde 1 hasta el número ingresado utilizando un bucle while y imprima la suma final.`;
const note = `n debe ser un numero entero positivo mayor a 1.`;

const Exercise17 = createParsonsExercise(initialCode, description, note);
export default Exercise17;