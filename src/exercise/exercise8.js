import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `nota1 = int(input("Ingresa la nota del primer examen: "))
    nota2 = int(input("Ingresa la nota del segundo examen: "))
    nota3 = int(input("Ingresa la nota del tercer examen: "))
    promedio = (nota1 + nota2 + nota3) / 3
    if promedio >= 9:
        print("Nota excelente")
    elif 6 <= promedio < 9:
        print("Aprobado")
    else:
        print("Reprobado")`;

const description = `Escribe un programa que pida al usuario las calificaciones de un estudiante en tres exámenes y calcule el promedio. Luego, el programa debe determinar si el estudiante tiene una "Nota excelente" (promedio de 9 o más), "Aprobado" (promedio entre 6 y 8 inclusive) o "Reprobado" (promedio menor a 6).`;
const note = `Las calificaciones son números enteros.`;

const Exercise8 = createParsonsExercise(initialCode, description, note);
export default Exercise8;