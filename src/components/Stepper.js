import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import { StartButton, FinishButton } from "./App.Buttons";
import { createSecureContext } from "tls";

function Stepper(props) {
  const { questions, answerCallback } = props;

  /*     
    const started = questions.filter( item => item.answer !== null )
    console.log(started)
    */

  const unanswered = questions.filter(item => item.answer === null);

  const [started, setStarted] = React.useState(
    unanswered.length < questions.length
  );
  const finished = questions.every(item => item.answer !== null);
  const maxQuestionNumber = questions.length 

  /**
   * Question ID are incrementals
   * 1 < max - Has a NEXT question
   * (>1) < max - Has a PREVIOUS/NEXT question
   * (=max) - Has a PREVIOUS question
   */

  const startHandler = () => {
    setStarted(true);
  };

  const questionHandler = (question, answerValue) => {
    // Handle Responsability To Parent
    answerCallback(question, answerValue)
  };
  
  const finishHandler = () => {};

  return (
    <div style={{height:'250px'}} className="container d-flex flex-column justify-content-center">
      {!started && !finished && (
        <StartButton actionCallback={startHandler}></StartButton>
      )}
      {started && !finished && (
        <Question
          questionCallback={questionHandler}
          question={unanswered[0]}
          max={maxQuestionNumber}
        ></Question>
      )}
      {finished && <FinishButton actionCallback={finishHandler}></FinishButton>}
    </div>
  );
}

Stepper.propTypes = {};

export default Stepper;
