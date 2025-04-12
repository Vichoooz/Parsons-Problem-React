import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `for i in range(1, 6):
    print(i)
for i in 1 to 5: #distractor
print(range(1, 6)) #distractor`;



const description =`Escribe un programa que imprima los números del 1 al 5 utilizando un bucle for.`
const note = ``;

const Exercise33 = createParsonsExercise(initialCode, description, note);
export default Exercise33;