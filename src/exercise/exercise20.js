import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `contraseña_correcta = "segura123"
contraseña = ""
while contraseña != contraseña_correcta:
    contraseña = input("Ingresa la contraseña: ")
print("Acceso concedido.")
while contraseña == contraseña_correcta: #distractor
`;

const description = `Implementa un programa que simule un sistema de contraseña. El programa debe solicitar la contraseña hasta que el usuario ingrese la correcta.`;
const note = ``;

const Exercise20 = createParsonsExercise(initialCode, description, note);
export default Exercise20;