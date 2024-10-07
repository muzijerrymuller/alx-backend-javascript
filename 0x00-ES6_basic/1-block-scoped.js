// The taskBlock function takes a boolean input, modifies block-scoped tasks based on the input, and returns an array with task states.
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
