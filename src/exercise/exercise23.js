import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `suma = 0 <br> contador = 0 <br> numero = None
while numero != 0:
    numero = int(input("Ingresa un número (0 para salir): "))
    if numero != 0:
        suma += numero <br>  contador += 1
promedio = suma / contador if contador > 0 else 0
print("El promedio es:", promedio)
`;

const description = `Escribe un programa que solicite números al usuario y calcule el promedio de los números ingresados. El programa debe finalizar cuando se ingrese un número igual a cero.`;
const note = ``;

const Exercise23 = createParsonsExercise(initialCode, description, note);
export default Exercise23;