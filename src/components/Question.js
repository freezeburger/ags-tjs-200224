import React from "react";
import PropTypes from "prop-types";
import Range from "./Range";

import {
  FinishButton,
  NextButton,
  PreviousButton,
  StartButton
} from "./App.Buttons";
import { PhoneField, NameField, AddressField } from "./App.Fields";

function Question(props) {
  const { question, max, questionCallback } = props;

  const [answerText, setAnswerText] = React.useState("");

  // Component can be pass as variables
  const QuestionField = question.type;
  const questionFieldHandler = value => {
    setAnswerText(value);
  };

  return (
    <div className="card">
      <div className="d-flex flex-column justify-content-center">
        <h2>{question.text}</h2>
        <QuestionField actionCallback={questionFieldHandler} />

        { (question.id  > 1 ) &&  <PreviousButton actionCallback={() => false}></PreviousButton> }
        

        {!answerText && (
          <span style={{ opacity: ".5" }}>
            <NextButton actionCallback={() => false}></NextButton>
          </span>
        )}

        {answerText && (
          <NextButton actionCallback={() => questionCallback(question,answerText)}></NextButton>
        )}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([PhoneField, AddressField, NameField])
  }).isRequired,
  max: PropTypes.number.isRequired,
  questionCallback: PropTypes.func.isRequired
};

export default Question;
