import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `palabra = input("Ingresa una palabra: ") <br> invertida = ""
for letra in palabra:
    invertida = letra + invertida
print("La palabra invertida es:", invertida)`;


const description = `Diseña un programa que invierta una cadena de texto ingresada por el usuario.`;
const note = `Ejemplo: si el usuario ingresa "hola", el programa debe mostrar "La palabra invertida es: aloh".`;

const Exercise34 = createParsonsExercise(initialCode, description, note);
export default Exercise34;