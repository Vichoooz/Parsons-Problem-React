import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `operacion = input("Elige una operación (+, -, *, /): ")
    numero1 = float(input("Ingresa el primer número: "))
    numero2 = float(input("Ingresa el segundo número: "))
    if operacion == "+":
        print("Resultado:", numero1 + numero2)
    elif operacion == "-":
        print("Resultado:", numero1 - numero2)
    elif operacion == "*":
        print("Resultado:", numero1 * numero2)
    elif operacion == "/":
        if numero2 == 0:
            print("Error: No se puede dividir por cero.")
        else:
            print("Resultado:", numero1 / numero2)
    else:
        print("Operación no válida.")`;

const description = `Escribe un programa que actúe como una calculadora, permitiendo al usuario elegir entre suma, resta, 
multiplicación o división. Asegúrate de manejar el error de división por cero correctamente.`;
const note = `Los condicionales deben ir en el orden de +, -, * y /.`;

const Exercise10 = createParsonsExercise(initialCode, description, note);
export default Exercise10;