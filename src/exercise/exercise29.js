import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `palabra = input("Ingresa una palabra: ")
for letra in palabra:
    print(letra)
letra = palabra[0] #distractor
palabra = letra #distractor`;

const description = `Crea un programa que solicite una palabra al usuario y la imprima letra por letra utilizando un bucle for.`;
const note = `Ejemplo: Si el usuario ingresa la palabra "hola", el programa debe imprimir: h; o; l; a; en líneas separadas.`;

const Exercise29 = createParsonsExercise(initialCode, description, note);
export default Exercise29;