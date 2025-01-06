import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `num1 = int(input("Ingresa el primer número: "))
    num2 = int(input("Ingresa el segundo número: "))
    num3 = int(input("Ingresa el tercer número: "))
    if num1 >= num2 and num1 >= num3:
        print("El número mayor es: " + num1)
    elif num2 >= num1 and num2 >= num3:
        print("El número mayor es: " + num2)
    else:
        print("El número mayor es: " + num3)`;

const description = `Escribe un programa que determine cuál de tres números ingresados es el mayor.`;
const note = `Los tres números son variables que contienen números enteros.`;	

const Exercise6 = createParsonsExercise(initialCode, description, note);
export default Exercise6
;
