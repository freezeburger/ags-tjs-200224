import React from 'react'
import Button from './Button'

export function NextButton(props) {
    //  {...props} forwards the props object
    return (
        <Button {...props}>Next Question ➡️</Button> 
    )
}

export function PreviousButton(props) {
    return (
        <Button  {...props}>⬅️ Previous Question </Button> 
    )
}

export function StartButton(props) {
    //  it is possible to override {...props}
    return (
        <Button {...props}  color="success">Start Your Inquiry </Button> 
    )
}
export function FinishButton(props) {
    return (
        <Button  {...props} color="success">Submit Your Answers </Button> 
    )
}