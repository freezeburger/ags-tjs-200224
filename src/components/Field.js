import React from "react";
import PropTypes from "prop-types";

function Field(props) {
  const {} = props;



  const inputStyles = {
    margin: "5px",
    maxWidth:'99%'
  };

  // React.Fragment is a virtual wrapper not rendered in the DOM
  return (
    <React.Fragment>
      <input className="form-control" style={inputStyles} />
      <div className="alert alert-danger" style={inputStyles}><strong>Invalid Value</strong></div>
    </React.Fragment>
  );
}
Field.defaultProps = {
    value:'',
    rule:/.*/,
    errorMessage:"Invalid Value",  
};


Field.propTypes = {
    value:PropTypes.string,
    rule:PropTypes.instanceOf(RegExp),
    errorMessage:PropTypes.string,
};

export default Field;
