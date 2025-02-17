import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";
if (localStorage.getItem("OPEN") === null){
    localStorage.setItem("OPEN", "true");
    window.location.reload();
}

const initialCode = `temperatura = int(input("Ingresa la temperatura"))
if temperatura < 10:
    print("Frío")
elif 10 <= temperatura <= 25:
    print("Templado")
else:
    print("Calor")`;

const description = `Escribe un programa que pida la temperatura en grados Celsius y clasifique el clima en Frío (menos de 10°C), 
Templado (de 10°C a 25°C) o Calor (más de 25°C).`;

const note = `Este ejercicio tiene como objetivo practicar el uso de condicionales simples en Python.`;

// Usa createParsonsExercise para crear el componente del ejercicio
const Exercise2 = createParsonsExercise(initialCode, description, note);

export default Exercise2;
