export function getBubbleSort(array) {
  let animations = [];
  let stack = array.slice();
  bubbleSort(stack, animations);
  array = stack;
  return [animations, array];
}

function bubbleSort(stack, animations) {
  const N = stack.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      animations.push([j, j + 1, "same"]);
      if (stack[j] > stack[j + 1]) {
        animations.push([j, j + 1, "same"]);
        animations.push([j, stack[j + 1], "changed"]);
        animations.push([j + 1, stack[j], "changed"]);
        animations.push([j, j + 1, "before"]);
        swap(stack, j, j + 1);
      }
      animations.push([j, j + 1, "before"]);
    }
  }
}

// [arr[i],arr[j]] = [arr[j],arr[i]]
function swap(stack, firstIdx, secondIdx) {
  let tmp = stack[firstIdx];
  stack[firstIdx] = stack[secondIdx];
  stack[secondIdx] = tmp;
}
