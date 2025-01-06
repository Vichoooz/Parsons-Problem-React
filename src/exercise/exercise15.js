import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `ld1 = int(input("Ingresa la longitud del primer lado: "))<br>ld2 = int(input("Ingresa la longitud del segundo lado: "))<br>ld3 = int(input("Ingresa la longitud del tercer lado: "))<br>ld4 = int(input("Ingresa la longitud del cuarto lado: "))
if ld1 == ld2 == ld3 == ld4:
    print("Es un cuadrado.")
elif ld1 == ld3 and ld2 == ld4:
    print("Es un rectángulo.")
else:
    print("No es una figura válida.")`;

const description = `Escribe un programa que determine si una figura geométrica es un cuadrado, un rectángulo o ninguna de estas, basándose en la longitud de sus lds. Si se ingresan cuatro valores para los lds de la figura.`;
const note = `El número ingresado es un número entero.`;

const Exercise15 = createParsonsExercise(initialCode, description, note);
export default Exercise15;