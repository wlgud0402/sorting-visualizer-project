import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import { getBubbleSort } from "./sortingAlgorithms/bubbleSort.js";
import { getMergeSort } from "./sortingAlgorithms/mergeSort.js";
import { getSelectionSort } from "./sortingAlgorithms/selectionSort.js";
import { getInsertionSort } from "./sortingAlgorithms/insertionSort.js";
import { getQuickSort } from "./sortingAlgorithms/quickSort.js";

function App() {
  const PRIMARY_COLOR = "turquoise"; //greenyellow
  const SECONDARY_COLOR = "red";
  const [nowSorting, setNowSorting] = useState(false);
  const firstSize = 10;
  const [arr, setArr] = useState([]);
  const [choosedSize, setChoosedSize] = useState(10);
  const [choosedSpeed, setChoosedSpeed] = useState(50);

  const screen = window.screen;
  const barHeightProPortion = (screen.height * 0.7) / arr.length;

  //페이지가 랜더링 될때 처음 실행됨
  useEffect(() => {
    makeArray(firstSize);
  }, []);

  const onChangeSpeed = (speed) => {
    setChoosedSpeed(speed);
  };

  //선택된 범위를 재사용해서 새로 다시 섞인 배열 생성
  const makeRandomArray = () => {
    makeArray(choosedSize);
  };

  //범위를 입력받은후 그만큼 크기의 배열생성, 섞기위해 shuffleArray 호출
  const makeArray = (range) => {
    let pureArray = [];
    for (let i = 1; i <= range; i++) {
      pureArray.push(i);
    }
    shuffleArray(pureArray);
  };

  //무작위로 배열내의 숫자를 섞음
  const shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setArr(array);
  };

  //거품정렬
  const onBubbleSort = async () => {
    setNowSorting(true);
    const [animations, sortedArray] = getBubbleSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * choosedSpeed);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * choosedSpeed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setNowSorting(false);
          setArr(sortedArray);
        }, i * choosedSpeed);
      }
    }
  };

  //병합정렬
  const onMergeSort = async () => {
    setNowSorting(true);
    const [animations, sortedArray] = getMergeSort([...arr]);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * choosedSpeed);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "after" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * choosedSpeed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setNowSorting(false);
          setArr(sortedArray);
        }, i * choosedSpeed);
      }
    }
  };

  //선택정렬
  const onSelectionSort = async () => {
    setNowSorting(true);
    let [animations, sortedArray] = getSelectionSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * choosedSpeed);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * choosedSpeed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setNowSorting(false);
          setArr(sortedArray);
        }, i * choosedSpeed);
      }
    }
  };

  //삽입정렬
  const onInsertionSort = () => {
    setNowSorting(true);
    const [animations, sortedArray] = getInsertionSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * choosedSpeed);
      } else {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "same" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * choosedSpeed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setNowSorting(false);
          setArr(sortedArray);
        }, i * choosedSpeed);
      }
    }
  };

  //퀵정렬
  const onQuickSort = () => {
    setNowSorting(true);
    const [animations, sortedArray] = getQuickSort(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "changed") {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * barHeightProPortion}px`;
        }, i * choosedSpeed);
      } else {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =
          animations[i][2] === "after" ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * choosedSpeed);
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          setNowSorting(false);
          setArr(sortedArray);
        }, i * choosedSpeed);
      }
    }
  };

  return (
    <div className="App">
      <Header
        makeRandomArray={makeRandomArray}
        onBubbleClick={onBubbleSort}
        onMergeClick={onMergeSort}
        onQuickClick={onQuickSort}
        onSelectionClick={onSelectionSort}
        onInsertionClick={onInsertionSort}
        onChangeRange={makeArray}
        onChangeSpeed={onChangeSpeed}
        choosedSize={choosedSize}
        choosedSpeed={choosedSpeed}
        nowSorting={nowSorting}
        setChoosedSize={setChoosedSize}
      />
      <Main arr={arr} />
    </div>
  );
}

export default App;
