import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question';

function Stepper(props) {
    const {questions,answerCallback} = props

    return (
        <div>
            <Question></Question>
        </div>
    )
}

Stepper.propTypes = {

}

export default Stepper
