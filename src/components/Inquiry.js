import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { NameField, PhoneField, AddressField } from "./App.Fields";
import Stepper from "./Stepper";

class Inquiry extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      questions: [
        {
          id: 1,
          text: "What is your Name ?",
          type: NameField,
          answer: null
        },
        {
          id: 2,
          text: "How can I call you ?",
          type: PhoneField,
          answer: null
        },
        {
          id: 3,
          text: "Where do you live ?",
          type: AddressField,
          answer: null
        }
      ]
    };

    this.answerHandler();
  }

  // This syntax in react-create-app prevent 'this' context modification (binding)
  answerHandler = (currentQuestion, answer) => {
    // Best Practice For setState()
    this.setState((previousState, props) => {
      const updatedQuestions = previousState.questions.map(item => {
        if (item.id === currentQuestion.id) {
          item.answer = answer;
        }
        return item;
      });

      return { questions: updatedQuestions };
    });
  };

  render() {
    return (
      <Stepper
        questions={this.state.questions}
        answerCallback={this.answerHandler}
      ></Stepper>
    );
  }
}

export default Inquiry;
