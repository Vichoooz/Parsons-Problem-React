import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `lado1 = float(input("Ingresa la longitud del primer lado: "))
        lado2 = float(input("Ingresa la longitud del segundo lado: "))
        lado3 = float(input("Ingresa la longitud del tercer lado: "))
        lado4 = float(input("Ingresa la longitud del cuarto lado: "))
        if lado1 == lado2 == lado3 == lado4:
            print("Es un cuadrado.")
        elif lado1 == lado3 and lado2 == lado4:
            print("Es un rectángulo.")
        else:
            print("No es una figura válida.")`;

const description = `Escribe un programa que determine si una figura geométrica es un cuadrado, un rectángulo o ninguna de estas, basándose en la longitud de sus lados. Si se ingresan cuatro valores para los lados de la figura.`;
const note = `El número ingresado es un número flotante.`;

const Exercise15 = createParsonsExercise(initialCode, description, note);
export default Exercise15;