// The taskBlock function takes a boolean input, modifies block-scoped tasks based on the input, and returns an array with task states.

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
