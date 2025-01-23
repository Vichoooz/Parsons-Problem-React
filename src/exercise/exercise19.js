import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `n = int(input("Ingresa un número: ")) <br> factorial = 1 <br> i = 1
if i < 0:
    print("No esta definido")
else: 
    while i <= n:
        factorial *= i
        i += 1
    print("El factorial es:", factorial)
`;

const description = `Diseña un programa que le pida al usuario que ingrese un número. El programa debe continuar solicitando números al usuario hasta que este ingrese un número negativo o cero. Después de cada número positivo ingresado, el programa debe mostrar el mensaje "Número positivo". Si el número ingresado es negativo o cero, el programa debe mostrar el mensaje "Número negativo o cero" y finalizar.`;
const note = `El factorial de un número n (n!) es el producto de todos los números enteros positivos menores o iguales a n. Por ejemplo, el factorial de 5 es 5! = 5 * 4 * 3 * 2 * 1 = 120. El factorial de 0 es 1. El factorial de un número negativo no está definido.`;

const Exercise19 = createParsonsExercise(initialCode, description, note);
export default Exercise19;