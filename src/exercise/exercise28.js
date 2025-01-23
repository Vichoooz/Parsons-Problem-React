import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `for i in range(1, 11):
    print("5 x " + str(i) + " = " + str(5 * i))
for i in range(1, n ) #distractor
for 11 in range(0, i) #distractor
for i in range(1, 12) #distractor
print("5 x " + i + " = " + 5 * i)) #distractor
print("5 x i = 5 * i") #distractor`;

const description = `Escribe un programa que imprima la tabla de multiplicar del 5 utilizando un bucle for. El programa debe iterar a través de los números del 1 al 10 y, para cada número, calcular el producto de ese número por 5 y mostrarlo en pantalla.`;
const note = `Ejemplo: 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, ..., 5 x 10 = 50`;

const Exercise28 = createParsonsExercise(initialCode, description, note);
export default Exercise28;