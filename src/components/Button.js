import React from 'react'
// We Should Install 'prop-types'
import PropTypes from 'prop-types'

function Button(props) {
    // Destructuration : extracts "children" key from "props" Object
    const {children, color, margin} = props

    const buttonStyles = {
        margin // Is equivalent as "margin:margin"
    }

    // classNames (npm i classnames) utility helps with className computing
    return (
        <div className={'btn btn-' + color} style={buttonStyles}>{children}</div>
    )
}

Button.defaultProps = {
    children:'Default Text',
    color:'primary',
    margin:'4px'
}

Button.propTypes = {
    children: PropTypes.string,
    color:PropTypes.oneOf(['primary','danger','warning','success']),
    margin:PropTypes.oneOf(['4px','none'])
}

export default Button
