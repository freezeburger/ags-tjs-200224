import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question';
import { StartButton, FinishButton } from './App.Buttons';

function Stepper(props) {

    const {questions,answerCallback} = props

/*     const started = questions.filter( item => item.answer !== null )
    console.log(started) */

    const unanswered = questions.filter( item => item.answer === null )

    const [started,setStarted] = React.useState( unanswered.length )
    const finished = questions.every( item => item.answer !== null );

    const startHandler = () => {}
    const questionHandler = () => {}
    const finishHandler = () => {}

    return (
        <div className="container d-flex flex-column justify-content-center">
            { ( !started && !finished ) && <StartButton actionCallback={startHandler}></StartButton> } 
            { ( started && !finished ) &&<Question questionCallback={questionHandler}></Question> }
            { finished &&<FinishButton actionCallback={finishHandler}></FinishButton>  }
        </div>
    )
}

Stepper.propTypes = {

}

export default Stepper
