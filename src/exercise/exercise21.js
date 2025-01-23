import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `i = 2
while i <= 20:
    print(i)
    i += 2
i++ #distractor
while i < 20: #distractor
while i < 20 #distractor
`;

const description = `Crea un programa que imprima los números pares entre 1 y 20 utilizando un bucle while`;
const note = ``;

const Exercise21 = createParsonsExercise(initialCode, description, note);
export default Exercise21;