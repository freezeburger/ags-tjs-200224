import React from 'react'
import PropTypes from 'prop-types'
import Range from './Range';
import Field from './Field';
import Button from './Button';

function Question(props) {
    const {} = props

    return (
        <div>
            <Range></Range>
            <Field></Field>
            <Button text="My Text"></Button>
            <Button>My Text</Button>
        </div>
    )
}

Question.propTypes = {

}

export default Question
