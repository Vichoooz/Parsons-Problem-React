import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `for i in range(1, 11):
    print(i)
for i in range(1, 10) #distractor
for i in range(0, 11) #distractor
for i in range(1, 12) #distractor
for i in range(1, ) #distractor`;

const description = `Escribe un programa que imprima los números del 1 al 10 utilizando un bucle for.`;
const note = `Solo debe ir un bucle for, los otros son distractores.`;

const Exercise26 = createParsonsExercise(initialCode, description, note);
export default Exercise26;