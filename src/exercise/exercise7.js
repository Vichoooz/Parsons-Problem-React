import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = int(input("Ingresa un número del 1 al 7: "))
if numero >= 1 and numero <= 7:
    if numero <= 5:
        print("Es un día laboral.")
    else:
        print("Es un fin de semana.")
else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Número fuera de rango.")`;

const description = `Diseña un programa que pida al usuario un número del 1 al 7 y determine si corresponde a un día de la semana 
laboral (lunes a viernes) o fin de semana (sábado o domingo). Si el número no está en el rango, imprime Número fuera de rango`;
const note = `El número 1 pertenece al día lunes, el número 2 al día martes, y así sucesivamente.`;

const Exercise7 = createParsonsExercise(initialCode, description, note);
export default Exercise7;
