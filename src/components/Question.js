import React from "react";
import PropTypes from "prop-types";
import Range from "./Range";

import {FinishButton,NextButton,PreviousButton,StartButton} from './App.Buttons'
import { PhoneField, NameField, AddressField } from "./App.Fields";


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

      <PhoneField></PhoneField>
      <NameField></NameField>
      <AddressField></AddressField>
      
       <StartButton></StartButton>
       <FinishButton></FinishButton>
       <PreviousButton></PreviousButton>
       <NextButton></NextButton>
    </div>
  );
}

Question.propTypes = {};

export default Question;
