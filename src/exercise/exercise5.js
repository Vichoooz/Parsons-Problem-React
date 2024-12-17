import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";


const initialCode = `day = int(input("¿Qué día de la semana es? (1-7) "))
if day == 1:
    print("Es lunes.")
elif day == 2:
    print("Es martes.")
elif day == 3:
    print("Es miércoles.")
elif day == 4:
    print("Es jueves.")
elif day == 5:
    print("Es viernes.")
elif day == 6:
    print("Es sábado.")
else:
    print("Es domingo.")`;

const description = `Haz un código que muestre el nombre del día de la semana según el número (1-7) que ingrese el usuario.`;
const note = `Este ejercicio te ayudará a practicar el uso de condicionales y el control de flujo.`;

const Exercise5 = createParsonsExercise(initialCode, description, note);
export default Exercise5;