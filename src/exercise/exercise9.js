import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `a = int(input("Ingresa el primer lado del triángulo: ")) <br>b = int(input("Ingresa el segundo lado del triángulo: "))<br>c = int(input("Ingresa el tercer lado del triángulo: "))
if a == b == c:
    print("Es un triángulo equilátero.")
elif a == b or b == c or a == c:
    print("Es un triángulo isósceles.")
else:
    print("Es un triángulo escaleno.")`;

const description = `Escribe un código que determine si un triángulo es equilátero, isósceles o escaleno según las longitudes de sus lados.`;
const note = `Un triangulo equilátero tiene todos sus lados iguales, un triángulo isósceles tiene dos lados iguales y un triángulo escaleno tiene todos sus lados diferentes.`;

const Exercise9 = createParsonsExercise(initialCode, description, note);
export default Exercise9;