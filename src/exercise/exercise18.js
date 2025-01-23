import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `while numero >= 0:
    numero = int(input("Ingresa un número: "))
    if numero > 0:
        print("Número positivo")
    else:
        print("Número negativo o cero")
`;

const description = `Diseña un programa que le pida al usuario que ingrese un número. El programa debe continuar solicitando números al usuario hasta que este ingrese un número negativo o cero. Después de cada número positivo ingresado, el programa debe mostrar el mensaje "Número positivo". Si el número ingresado es negativo o cero, el programa debe mostrar el mensaje "Número negativo o cero" y finalizar.`;
const note = ``;

const Exercise18 = createParsonsExercise(initialCode, description, note);
export default Exercise18;