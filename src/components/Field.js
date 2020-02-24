import React from "react";
import PropTypes from "prop-types";

function Field(props) {
  const { value, rule, errorMessage, actionCallback, placeholder } = props;

  // Create Internal State with React.useState( initialValue ) "Hook"
  const [inputValue, setInpuValue] = React.useState(value);
  let valid = rule.test(inputValue);

  const inputChangeHandler = event => {
    // Call to setter "setInpuValue" re render component
    setInpuValue(event.target.value);
  };

  const inputBlurHandler = event => {
    valid && actionCallback(inputValue);
  }

  const inputStyles = {
    margin: "5px",
    maxWidth: "95%"
  };

  // React.Fragment is a virtual wrapper not rendered in the DOM
  return (
    <React.Fragment>
     { valid && "✔️"}
      <input
        className="form-control"
        style={inputStyles}
        value={inputValue}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        placeholder={placeholder}
      />
      {!valid && (
        <div className="alert alert-danger" style={inputStyles}>
          <strong>{errorMessage}</strong>
        </div>
      )}
    </React.Fragment>
  );
}
Field.defaultProps = {
  value: "",
  rule: /.*/,
  errorMessage: "Invalid Value",
  actionCallback:()=>false,
  placeholder:''
};

Field.propTypes = {
  actionCallback: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rule: PropTypes.instanceOf(RegExp),
  errorMessage: PropTypes.string
};

export default Field;
