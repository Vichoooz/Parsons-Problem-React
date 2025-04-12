import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `for i in range(3, 31, 3):
    print(i)
print(3 * i) #distractor
for i in range(3, 30): #distractor
if i % 3 == 0: #distractor
    print(3) #distractor`;



const description = `Escribe un programa que imprima la tabla del 3 (del 3 al 30) utilizando un bucle for. `
const note = ``;

const Exercise34 = createParsonsExercise(initialCode, description, note);
export default Exercise34;