import React from "react";
import PropTypes from "prop-types";
import "../../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import "./button.scss";

/**
 * Buttons allow users to take actions, and make choices, with a single tap. <br />
 * We have three types of component, primary, secondary and terciary.
 * @version 1.0.0
 * @author [Álvaro González](https://github.com/Alvaro07)
 */

const Button = props => {
  const smallClass = props.small ? "c-button--small" : "";

  // Variant types
  let variantClass = props.variant;
  if (props.variant === "secondary") {
    variantClass = "c-button--secondary";
  } else if (props.variant === "terciary") {
    variantClass = "c-button--terciary";
  } else {
    variantClass = "";
  }

  return (
    <button className={`c-button ${props.extraClass} ${smallClass} ${variantClass}`} onClick={props.onClick}>
      {props.icon && <FontAwesomeIcon icon={props.icon} className="c-button__icon" />}
      {props.text}
    </button>
  );
};

/**
 * PropTypes
 */

Button.defaultProps = {
  extraClass: "",
  small: false,
  variant: "primary",
  icon: null
};

Button.propTypes = {
  /** The text of the button */
  text: PropTypes.string.isRequired,
  /** Optional extra classes */
  extraClass: PropTypes.string,
  /** Turn the button into small */
  small: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "terciary"]),
  /** Function to execute an action */
  onClick: PropTypes.func,
  /** The icon class */
  icon: PropTypes.string
  // isLoading: PropTypes.bool
};

export default Button;
