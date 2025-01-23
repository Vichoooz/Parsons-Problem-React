import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `while opcion != "Salir":
    print("Menú:")
    print("1. Opción 1")
    print("2. Opción 2")
    print("3. Salir")
    opcion = input("Selecciona una opción: ")
`;

const description = `Diseña un programa que simule un menú interactivo donde el usuario pueda elegir entre varias opciones. El programa debe continuar mostrando el menú hasta que el usuario seleccione la opción "Salir"`;
const note = `Las opciones deben estar en orden.`;

const Exercise22 = createParsonsExercise(initialCode, description, note);
export default Exercise22;