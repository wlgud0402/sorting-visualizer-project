import React from "react";
import styled from "styled-components";

const Main = ({ arr }) => {
  const screen = window.screen;
  const barHeightProPortion = (screen.height * 0.7) / arr.length;
  const barWidth = screen.width / arr.length;

  return (
    <Container>
      <BlockContinaer>
        {arr.map((size, idx) => {
          return (
            <Bar
              className="array-bar"
              key={idx}
              height={`${size * barHeightProPortion}px`}
              width={`${barWidth}px`}
            />
          );
        })}
      </BlockContinaer>
      <Step>
        <p>© 2021 Jihyung Kim CO., LTD. ALL RIGHTS RESERVED.</p>
        <p className="contact">contact: 010-6805-0402</p>
      </Step>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const BlockContinaer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const Bar = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: turquoise;
  margin-right: 2px;
  /* transition: all ease-in 0.5s;
  &:hover {
    background-color: black;
  } */
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  background-color: turquoise;
  text-align: center;
  border: 1px solid white;
  color: white;
  font-weight: bold;

  .contact {
    margin: 0px;
    margin-bottom: 10px;
  }
`;
