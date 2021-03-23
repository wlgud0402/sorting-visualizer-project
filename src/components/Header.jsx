import React from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

const Header = ({
  makeRandomArray,
  onBubbleClick,
  onMergeClick,
  onQuickClick,
  onSelectionClick,
  onInsertionClick,
  onChangeRange,
  choosedSize,
  choosedSpeed,
  nowSorting,
  onChangeSpeed,
  setChoosedSize,
}) => {
  const [value, setValue] = useState(choosedSize);
  const [speed, setSpeed] = useState(choosedSpeed);

  const handleSliderChange = (event, newValue) => {
    //쓰로틀링
    let timer;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        setValue(newValue);
        setChoosedSize(newValue);
        onChangeRange(value);
      }, 50);
    }
  };
  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
    onChangeSpeed(150 - newValue + 1);
  };

  return (
    <Wrapper>
      <Title>Sorting Visualization</Title>
      <RangeWrapper>
        <Typography className="typo">Length</Typography>
        <Slider
          min={10}
          max={150}
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          className="slider"
        />
      </RangeWrapper>
      <RangeWrapper>
        <Typography className="typo">Speed</Typography>
        <Slider
          min={1}
          max={150}
          value={typeof speed === "number" ? speed : 0}
          onChange={handleSpeedChange}
          className="slider"
        />
      </RangeWrapper>
      <button
        onClick={makeRandomArray}
        className={true ? "sortButton" : "disabled"}
      >
        랜덤 배열
      </button>
      <Button onClick={onMergeClick}>Merge Sort</Button>
      <Button onClick={onQuickClick}>Quick Sort</Button>
      <Button onClick={onSelectionClick}>Selection Sort</Button>
      <Button onClick={onBubbleClick}>Bubble Sort</Button>
      <Button onClick={onInsertionClick}>Insertion Sort</Button>
    </Wrapper>
  );
};

export default Header;

const Title = styled.p`
  color: wheat;
  font-size: 19px;
  font-weight: bold;
`;

const Button = styled.p`
  all: unset;
  color: white;
  transition: 0.2s;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 7px;
  &:hover {
    color: black;
    background: #fff;
    box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-y: hidden;
  align-content: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.33);

  .sortButton {
    all: unset;
    color: white;
    transition: 0.2s;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 7px;
    &:hover {
      color: black;
      background: #fff;
      box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
      cursor: pointer;
    }
  }

  .disabled {
    all: unset;
    color: gray;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 7px;
  }
`;

const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;

  .slider {
    padding: 0px;
    color: yellow;
  }

  .typo {
    color: yellow;
  }
`;
