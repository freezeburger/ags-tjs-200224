import React from "react";
import PropTypes from "prop-types";
import Range from "./Range";

import {FinishButton,NextButton,PreviousButton,StartButton} from './App.Buttons'


function Question(props) {
  const {} = props;

  // Handler is a naming convention for Event Function
  const buttonClickHandler = () => {
    // Arrow Functions "=>" declares a function
    console.log("Button Clicked !");
  };

  const nameFiledHandler = name => alert("Welcome " + name);

  return (
    <div>
      <Range></Range>
      
       <StartButton></StartButton>
       <FinishButton></FinishButton>
       <PrevButton></PrevButton>
       <NextButton></NextButton>
    </div>
  );
}

Question.propTypes = {};

export default Question;
