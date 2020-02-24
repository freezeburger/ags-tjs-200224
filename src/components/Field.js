import React from "react";
import PropTypes from "prop-types";

function Field(props) {
  const { value, rule, errorMessage } = props;

  // Create Internal State with React.useState( initialValue ) "Hook"
  const [inputValue, setInpuValue] = React.useState(value);

  const inputChangeHandler = (event) => {
    // Call to setter "setInpuValue" re render component
    setInpuValue(event.target.value);
  };
 
  const inputStyles = {
    margin: "5px",
    maxWidth: "99%"
  };

  // React.Fragment is a virtual wrapper not rendered in the DOM
  return (
    <React.Fragment>
      <input
        className="form-control"
        style={inputStyles}
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <div className="alert alert-danger" style={inputStyles}>
        <strong>{errorMessage}</strong>
      </div>
    </React.Fragment>
  );
}
Field.defaultProps = {
  value: "test",
  rule: /.*/,
  errorMessage: "Invalid Value"
};

Field.propTypes = {
  value: PropTypes.string,
  rule: PropTypes.instanceOf(RegExp),
  errorMessage: PropTypes.string
};

export default Field;
