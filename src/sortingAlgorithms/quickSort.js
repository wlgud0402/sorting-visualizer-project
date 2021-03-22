export function getQuickSort(array) {
  let animations = [];
  let dupArray = array.slice();
  quickSort(dupArray, animations);
  array = dupArray;
  return [animations, array];
}

export function quickSort(arr, animations) {
  let stack = [];
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack[stack.length - 1] >= 0) {
    let end = stack.pop();
    let start = stack.pop();
    animations.push([start, end, "after"]);
    animations.push([start, end, "before"]);

    let pivotIndex = partition(arr, start, end, animations);
    animations.push([pivotIndex, pivotIndex, "pivot"]);
    // animations.push([pivotIndex, pivotIndex, "before"]);

    // pivot보다 왼쪽에 있는 것들은 나중에 정렬하기 위해 stack에 추가
    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    // pivot보다 오른쪽에 있는 것들은 나중에 정렬하기 위해 stack에 추가
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
  return [animations, arr];
}

function partition(arr, start, end, animations) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      animations.push([pivotIndex, i, "after"]);
      // animations.push([pivotIndex, i, "after"]);
      swap(arr, pivotIndex, i);
      animations.push([i, arr[i], "changed"]);
      animations.push([pivotIndex, arr[pivotIndex], "changed"]);
      animations.push([pivotIndex, i, "before"]);
      pivotIndex++;
    }
  }

  // pivot값을 가운데로
  swap(arr, pivotIndex, end);
  animations.push([pivotIndex, end, "after"]);
  // animations.push([pivotIndex, end, "after"]);
  animations.push([pivotIndex, arr[pivotIndex], "changed"]);
  animations.push([end, arr[end], "changed"]);
  animations.push([pivotIndex, end, "before"]);

  return pivotIndex;
}

// export function getQuickSort(array) {
//   let animations = [];
//   let stack = array.slice();
//   let left = 0;
//   let right = stack.length - 1;
//   QuickSort(stack, left, right, animations);
//   array = stack;
//   return [animations, array];
// }

// function QuickSort(array, left, right, animations) {
//   if (left >= right) {
//     return;
//   }
//   const mid = Math.floor((left + right) / 2);
//   const pivot = array[mid];
//   const partition = divide(array, left, right, pivot, animations);
//   QuickSort(array, left, partition - 1, animations);
//   QuickSort(array, partition, right, animations);
//   return array;
// }

// function divide(array, left, right, pivot, animations) {
//   while (left <= right) {
//     while (array[left] < pivot) {
//       // animations.push([pivot, left, "before"]);
//       left++;
//       animations.push([pivot, left, "after"]);
//       animations.push([pivot, left, "before"]);
//     }
//     while (array[right] > pivot) {
//       // animations.push([pivot, right, "before"]);
//       right--;
//       animations.push([pivot, right, "after"]);
//       animations.push([pivot, right, "before"]);
//     }
//     if (left <= right) {
//       swap(array, left, right);
//       animations.push([left, array[left], "changed"]);
//       animations.push([right, array[right], "changed"]);
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// // [arr[i],arr[j]] = [arr[j],arr[i]]
function swap(stack, firstIdx, secondIdx) {
  let tmp = stack[firstIdx];
  stack[firstIdx] = stack[secondIdx];
  stack[secondIdx] = tmp;
}
