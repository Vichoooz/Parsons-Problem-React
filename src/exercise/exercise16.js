import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `i = 1
i = 0 #distractor
i -= 1 #distractor
while i <= 10:
    print(i)
    i += 1
`;

const description = `Escribe un programa que imprima los números del 1 al 10 utilizando un bucle while`;
const note = ``;

const Exercise16 = createParsonsExercise(initialCode, description, note);
export default Exercise16;