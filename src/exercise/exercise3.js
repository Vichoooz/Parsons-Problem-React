import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `age = int(input("¿Cuál es tu edad? "))
if age >= 18:
    print("Mayor de edad.")
else:
    print("Menor de edad.")
    
    if age > 18: #distractor`;

const description = `El código debe preguntar por la edad de una persona y clasificarla como "Mayor de edad" si tiene 18 años o más, o "Menor de edad" si tiene menos de 18 años.`;

const note = `Este ejercicio tiene como objetivo practicar el uso de condicionales simples en Python con el uso de if y else.`;

const Exercise3 = createParsonsExercise(initialCode, description, note);

export default Exercise3;
