import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `num1 = int(input("Ingresa el primer número: "))<br>num2 = int(input("Ingresa el segundo número: "))<br>num3 = int(input("Ingresa el tercer número: "))
if num1 >= num2 and num1 >= num3:
    print("El número mayor es: " + num1)
elif num3 >= num1 and num3 >= num2:
    print("El número mayor es: " + num3)
else:
    print("El número mayor es: " + num2)`;

const description = `Escribe un programa que determine cuál de tres números ingresados es el mayor.`;
const note = `Los tres números son variables que contienen números enteros distintos.`;	

const Exercise6 = createParsonsExercise(initialCode, description, note);
export default Exercise6
;
