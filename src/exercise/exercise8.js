import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `hour = int(input("¿Qué hora es? "))
day = input("¿Qué día es? ").lower()`;

const description = `Haz un código que salude dependiendo de la hora y si es fin de semana o día de semana.`;
const note = `Este ejercicio te ayudará a practicar las condiciones combinadas con if, elif y else.`;

const Exercise7 = createParsonsExercise(initialCode, description, note);
export default Exercise7;
