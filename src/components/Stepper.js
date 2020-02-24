import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question';
import { StartButton, FinishButton } from './App.Buttons';

function Stepper(props) {
    const {questions,answerCallback} = props

    const startHandler = () => {}
    const questionHandler = () => {}
    const finishHandler = () => {}

    return (
        <div className="container d-flex flex-column justify-content-center">
            <StartButton actionCallback={startHandler}></StartButton>
            <Question questionCallback={questionHandler}></Question>
            <FinishButton actionCallback={finishHandler}></FinishButton>
        </div>
    )
}

Stepper.propTypes = {

}

export default Stepper
