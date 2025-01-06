import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `anio_actual = int(input("Ingresa año actual: "))<br>anio = int(input("Ingresa un año: "))
if anio < anio_actual:
    dif = anio_actual - anio
    print("Han pasado "+ dif + " años desde el año " + anio)
elif anio > anio_actual:
    dif = anio - anio_actual
    print("Faltan " + dif + " años para el año " + anio3)
else:
    print("El año ingresado es el año actual: " + anio_actual)
elif anio >= anio_actual: #distractor`;

const description = `Escribe un programa que solicite el año actual y un año de referencia. Luego, compara ambos años para determinar si han pasado o faltan años para llegar al año ingresado. Si el año ingresado es el mismo que el actual, informa que ambos son iguales.`;
const note = `Los años son números enteros.`;

const Exercise11 = createParsonsExercise(initialCode, description, note);
export default Exercise11;