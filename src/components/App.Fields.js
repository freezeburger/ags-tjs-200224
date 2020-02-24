import React from 'react'
import Field from './Field'

export function PhoneField(props) {
    return (
       <Field
        {...props}
        placeholder="Phone Number"
        rule={/^\d{5}$/}
        errorMessage="Please enter a valid phone number !"
       ></Field> 
    )
}

export function NameField(props) {
    return (
       <Field
        {...props}
        placeholder="Name"
        rule={/^[A-z][a-z]{1,8}$/}
        errorMessage="8 letters maximum starting with capital"
       ></Field> 
    )
}

export function AddressField(props) {
    return (
       <Field
        {...props}
        placeholder="Street Address"
        rule={/^[0-9]{1,4}.*$/}
        errorMessage="Address must start with number !"
       ></Field> 
    )
}

