import React from 'react'
// We Should Install 'prop-types'
import PropTypes from 'prop-types'

function Button(props) {
    // Destructuration : extracts "children" key from "props" Object
    const {children} = props

    return (
        <div>{children}</div>
    )
}

Button.defaultProps = {
    children:'Default Text'
}

Button.propTypes = {

}

export default Button
