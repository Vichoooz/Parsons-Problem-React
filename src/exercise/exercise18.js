import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = 0
while numero >= 0:
    numero = int(input("Ingresa un número: "))
    if numero > 0:
        print("Número positivo")
    else:
        print("Número negativo o cero")

while numero > 0: #distractor
if numero == 0: #distractor
elif numero < 0: #distractor
`;

const description = `Diseña un programa que solicite al usuario un número y continúe pidiéndolo hasta que ingrese un número negativo o cero.`;
const note = `Tambien se debe imprimir "Número positivo" si el número ingresado es positivo.`;

const Exercise18 = createParsonsExercise(initialCode, description, note);
export default Exercise18;