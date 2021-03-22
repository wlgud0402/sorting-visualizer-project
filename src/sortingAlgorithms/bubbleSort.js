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

//bubbleSort.jsㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// function bubbleSort(stack, animations) {
//   const N = stack.length;
//   for (let i = 0; i < N - 1; i++) {
//     for (let j = 0; j < N - i - 1; j++) {
//       animations.push([j, j + 1]);
//       animations.push([j, j + 1]);
//       if (stack[j] > stack[j + 1]) {
//         animations.push([j, stack[j + 1]]);
//         animations.push([j + 1, stack[j]]);
//         swap(stack, j, j + 1);
//       } else {
//         animations.push([-1, -1]);
//         animations.push([-1, -1]);
//       }
//     }
//   }
// }

//App.jsㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// let [animations, randomValue] = getBubbleSort(arr);
// for (let i = 0; i < animations.length; i++) {
//   const isColorChange = i % 4 === 0 || i % 4 === 1;
//   const arrayBars = document.getElementsByClassName("array-bar");
//   if (isColorChange === true) {
//     const color = i % 4 === 0 ? "red" : "turquoise";
//     const [barOneIdx, barTwoIdx] = animations[i];
//     const barOneStyle = arrayBars[barOneIdx].style;
//     const barTwoStyle = arrayBars[barTwoIdx].style;
//     setTimeout(() => {
//       barOneStyle.backgroundColor = color;
//       barTwoStyle.backgroundColor = color;
//     }, i * ANIMATION_SPEED_MS);
//   } else {
//     const [barIdx, newHeight] = animations[i];
//     if (barIdx === -1) {
//       continue;
//     }
//     const barStyle = arrayBars[barIdx].style;
//     setTimeout(() => {
//       barStyle.height = `${newHeight * barHeightProPortion}px`;
//     }, i * ANIMATION_SPEED_MS);
//   }
// }
