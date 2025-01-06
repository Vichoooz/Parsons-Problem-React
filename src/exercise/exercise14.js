import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `salario = float(input("Ingresa tu salario: "))
        if salario <= 0:
            print("El salario no es válido")
        elif salario <= 5000:
            print("Rango 1")
        elif salario <= 10000:
            print("Rango 2")
        elif salario <= 20000:
            print("Rango 3")
        else:
            print("Rango 4")`;

const description = `Escribe un programa que pida el salario de una persona y determine en qué rango se encuentra. Los rangos son los siguientes: si el salario es mayor a 0 y menor o igual a 5000, la persona está en el Rango 1; si el salario es mayor a 5000 y menor o igual a 10000, la persona está en el Rango 2; si el salario es mayor a 10000 y menor o igual a 20000, la persona está en el Rango 3; si el salario es mayor a 20000, la persona está en el Rango 4; y si el salario es menor o igual a 0, se debe indicar que el salario no es válido.`;
const note = `El número ingresado es un número flotante.`;

const Exercise14 = createParsonsExercise(initialCode, description, note);
export default Exercise14;