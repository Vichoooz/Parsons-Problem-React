import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = int(input("Ingresa un número: ")) <br> contador = 0
while numero > 0:
    numero //= 10 <br> contador += 1
numero %= 10 <br> contador += 1 #distractor
numero #= 10 <br> contador += 1 #distractor
numero **= 10 <br> contador += 1 #distractor
print("El número tiene", contador, "dígitos.")
`;

const description = `Implementa un programa que cuente cuántos dígitos tiene un número ingresado por el usuario utilizando un bucle while .`;
const note = `Ejemplo: 1421 tiene 4 dígitos.`;

const Exercise24 = createParsonsExercise(initialCode, description, note);
export default Exercise24;