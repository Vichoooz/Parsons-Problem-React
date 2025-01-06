import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `dinero = float(input("¿Cuánto dinero tienes? "))
        precio_producto = float(input("¿Cuánto cuesta el producto? "))
        if dinero > precio_producto:
            sobra = dinero - precio_producto
            print("Tienes dinero y te sobra:" + sobra)
        elif dinero == precio_producto:
            print("Tienes justo el dinero necesario.")
        else:
            falta = precio_producto - dinero
            print("No tienes suficiente dinero. Te falta: "+falta)`;

const description = `Escribe un programa que pida al usuario cuánto dinero tiene y cuánto cuesta un producto. Luego, el programa debe determinar si el dinero es suficiente para comprar el producto, si falta dinero o si tiene dinero de sobra.`;
const note = `El dinero y el costo del producto son números flotantes.`;

const Exercise12 = createParsonsExercise(initialCode, description, note);
export default Exercise12;