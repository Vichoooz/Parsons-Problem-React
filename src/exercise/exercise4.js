import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `a = 200 <br>b = 33
if b > a:
  print("b es mayor que a")
elif a == b:
  print("a y b son iguales")
else:
  print("a es mayor que b")`;

const description = `Crea un programa que permita comparar dos números (a y b). El programa debe determinar cuál de los dos números es mayor, si ambos son iguales o si son diferentes.`;

const note = `a y b son variables que contienen números enteros.`;

const Exercise4 = createParsonsExercise(initialCode, description, note);

export default Exercise4;
