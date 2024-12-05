
import { createParsonsExercise } from "../parsons/ParsonsExerciseCreate";

const initialCode = `def is_true(boolean_value):
  if boolean_value:
    return True
  return False
  return true #distractor
print(Hola)`;

const description = `Construct a function by drag & dropping and reordering lines from the
  left to the right. The constructed function should return True if the
  parameter is True and return False otherwise.`;

const note = `The correct solution is obviously a dumb way to do it. This exercise is merely trying to give an example of a Parson's puzzle with js-parsons, not teach you Python :)`;

// Usa createParsonsExercise para crear el componente del ejercicio
const Exercise1 = createParsonsExercise(initialCode, description, note);

export default Exercise1;
