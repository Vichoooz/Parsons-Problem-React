import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = float(input("Ingresa un número: "))
        if numero == 0:
            print("Cero")
        elif numero < 0:
            if abs(numero) > 100:
                print("Lejos negativo")
            else:
                print("Cerca negativo")
        else:
            if numero > 50:
                print("Lejos positivo")
            else:
                print("Cerca positivo")`;

const description = `Escribe un programa que pida un número al usuario y lo clasifique según su valor y su proximidad al cero. Si el número es negativo y tiene una distancia mayor a 100 unidades del cero, se clasificará como Lejos negativo. Si es negativo y está a 100 unidades o menos del cero, será Cerca negativo. Si es positivo y tiene más de 50 unidades del cero, será Lejos positivo, y si está a 50 unidades o menos, será Cerca positivo. Si el número es exactamente cero, se clasificará como Cero`;
const note = `El número ingresado es un número flotante.`;

const Exercise13 = createParsonsExercise(initialCode, description, note);
export default Exercise13;