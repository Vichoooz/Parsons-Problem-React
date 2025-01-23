import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `import random
numero_secreto = random.randint(1, 100) <br> adivinado = False
while not adivinado:
    intento = int(input("Adivina el número: "))
    if intento == numero_secreto:
        print("¡Correcto!") <br>  adivinado = True
    elif intento < numero_secreto:
        print("Demasiado bajo.")
    else:
        print("Demasiado alto.")
`;

const description = `Crea un programa que permita al usuario adivinar un número aleatorio entre 1 y 100. El programa debe continuar hasta que el usuario adivine correctamente`;
const note = `Random es un módulo de Python que permite generar números aleatorios. randint(a, b) genera un número aleatorio entre a y b, ambos incluidos.`;

const Exercise25 = createParsonsExercise(initialCode, description, note);
export default Exercise25;