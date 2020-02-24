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
            <Button></Button>
            <Button>My Text</Button>
            <Button><button>X</button></Button>
        </div>
    )
}

Question.propTypes = {

}

export default Question
