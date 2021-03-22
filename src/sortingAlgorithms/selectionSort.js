export function getSelectionSort(array) {
  let animations = [];
  let stack = array.slice();
  selectionSort(stack, animations);
  array = stack;
  return [animations, array];
}

function selectionSort(stack, animations) {
  for (let i = 0; i < stack.length - 1; i++) {
    let minNumberIdx = i;
    //오직 정렬되지 않은 배열에서만 탐색하기 위해서 j를 i + 1로 설정한다.
    for (let j = minNumberIdx + 1; j < stack.length; j++) {
      animations.push([minNumberIdx, j, "same"]);
      animations.push([minNumberIdx, j, "same"]);
      animations.push([minNumberIdx, j, "before"]);
      if (stack[minNumberIdx] > stack[j]) {
        minNumberIdx = j;
      }
    }
    //swap
    if (minNumberIdx !== i) {
      swap(stack, minNumberIdx, i);
      animations.push([minNumberIdx, i, "same"]);
      animations.push([minNumberIdx, stack[minNumberIdx], "changed"]);
      animations.push([i, stack[i], "changed"]);
      animations.push([minNumberIdx, i, "before"]);
    }
  }
  return stack;
}

function swap(array, minNumberIdx, secondIdx) {
  let tmp = array[minNumberIdx];
  array[minNumberIdx] = array[secondIdx];
  array[secondIdx] = tmp;
}
