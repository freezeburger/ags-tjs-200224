import React from 'react'
import PropTypes from 'prop-types'
import Range from './Range';
import Field from './Field';
import Button from './Button';

function Question(props) {
    const {} = props

    // Handler is a naming convention for Event Function
    const buttonClickHandler = () => { // Arrow Functions "=>" declares a function
        console.log('Button Clicked !')
    }

    return (
        <div>
            <Range></Range>
            <Field></Field>

            <Button color="success" actionCallback={buttonClickHandler}>My Text</Button>
 

        </div>
    )
}

Question.propTypes = {

}

export default Question
