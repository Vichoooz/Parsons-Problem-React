import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `hour = int(input("¿Qué hora es? "))
day = input("¿Qué día es? ").lower()
if day == "sábado" or day == "domingo":
    if hour < 12:
        print("Buen día, disfruta tu fin de semana")
    else:
        print("Buenas tardes, disfruta tu fin de semana")
else:
    if hour < 12:
        print("Buen día, que tengas un excelente inicio de semana")
    else:
        print("Buenas tardes, sigue trabajando fuerte")`;

const description = `Diseña un programa que pida al usuario un número del 1 al 7 y determine si corresponde a un día de la semana 
laboral (lunes a viernes) o fin de semana (sábado o domingo). Si el número no está en el rango, imprime Número fuera de rango`;
const note = `Este ejercicio te ayudará a practicar las condiciones combinadas con if, elif y else.`;

const Exercise7 = createParsonsExercise(initialCode, description, note);
export default Exercise7;
