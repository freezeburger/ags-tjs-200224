import React from 'react'
import PropTypes from 'prop-types'

function Field(props) {
    const {} = props

    // React.Fragment is a virtual wrapper not rendered in the DOM
    return (
        <React.Fragment>
            <input className="form-control"/>
        </React.Fragment>
    )
}

Field.propTypes = {

}

export default Field
