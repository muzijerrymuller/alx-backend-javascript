export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let so the variable can be reassigned
  let task2 = true;  // Use let for the same reason

  if (trueOrFalse) {
    task = true;      // Update the existing variable
    task2 = false;    // Update the existing variable
  }

  return [task, task2]; // Return the updated values
}
