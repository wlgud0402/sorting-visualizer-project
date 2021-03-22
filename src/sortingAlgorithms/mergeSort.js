export function getMergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const stack = array.slice();
  mergeSortHelper(array, 0, array.length - 1, stack, animations);
  return [animations, array];
}

function mergeSortHelper(mainArray, startIdx, endIdx, stack, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(stack, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(stack, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, stack, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, stack, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j, "after"]);
    animations.push([i, j, "before"]);
    if (stack[i] <= stack[j]) {
      // animations.push([k, i, "after"]);
      animations.push([k, stack[i], "changed"]);
      // animations.push([k, i, "before"]);

      mainArray[k++] = stack[i++];
    } else {
      // animations.push([k, j, "after"]);
      animations.push([k, stack[j], "changed"]);
      // animations.push([k, j, "before"]);

      mainArray[k++] = stack[j++];
    }
  }
  while (i <= middleIdx) {
    // animations.push([k, i, "after"]);
    animations.push([k, stack[i], "changed"]);
    // animations.push([k, i, "before"]);

    mainArray[k++] = stack[i++];
  }
  while (j <= endIdx) {
    // animations.push([k, j, "after"]);
    animations.push([k, stack[j], "changed"]);
    // animations.push([k, j, "before"]);

    mainArray[k++] = stack[j++];
  }
}

// function doMerge(mainArray, startIdx, middleIdx, endIdx, stack, animations) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     animations.push([i, j]);
//     animations.push([i, j]);
//     if (stack[i] <= stack[j]) {
//       animations.push([k, stack[i]]);
//       mainArray[k++] = stack[i++];
//     } else {
//       animations.push([k, stack[j]]);
//       mainArray[k++] = stack[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     animations.push([i, i]);
//     animations.push([i, i]);
//     animations.push([k, stack[i]]);
//     mainArray[k++] = stack[i++];
//   }
//   while (j <= endIdx) {
//     animations.push([j, j]);
//     animations.push([j, j]);
//     animations.push([k, stack[j]]);
//     mainArray[k++] = stack[j++];
//   }
// }
