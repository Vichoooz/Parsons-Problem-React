import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `numero = int(input("Ingresa un número: ")) <br> es_primo = True
for i in range(2, numero):
    if numero % i == 0:
        es_primo = False
if numero > 1 and es_primo:
    print("El número es primo.")
else:
    print("El número no es primo.")`;

const description = `Crea un programa que verifique si un número es primo utilizando un bucle for.`;
const note = `Ejemplo: si el usuario ingresa 7, el programa debe mostrar "El número es primo."`;

const Exercise31 = createParsonsExercise(initialCode, description, note);
export default Exercise31;