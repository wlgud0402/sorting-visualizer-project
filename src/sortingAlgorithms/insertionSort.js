export function getInsertionSort(array) {
  let animations = [];
  let stack = array.slice();
  insertionSort(stack, animations);
  array = stack;
  return [animations, array];
}

function insertionSort(stack, animations) {
  const len = stack.length;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j > -1; j--) {
      animations.push([i, j, "same"]);
      animations.push([i, j, "same"]);
      if (stack[j + 1] < stack[j]) {
        //값의 위치가 바뀐다
        swap(stack, j + 1, j);
        animations.push([j, j + 1, "same"]);
        animations.push([j, stack[j], "changed"]);
        animations.push([j + 1, stack[j + 1], "changed"]);
        animations.push([j, j + 1, "before"]);
        //바뀌지 않는다
      }
      animations.push([i, j, "before"]);
    }
  }
}

// [arr[i],arr[j]] = [arr[j],arr[i]]
function swap(stack, firstIdx, secondIdx) {
  let tmp = stack[firstIdx];
  stack[firstIdx] = stack[secondIdx];
  stack[secondIdx] = tmp;
}
