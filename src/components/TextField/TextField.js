import React from "react";
import PropTypes from "prop-types";
import "../../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import "./textField.scss";

/**
 * Text fields let users enter and edit text.
 * @version 1.0.0
 * @author [Álvaro González](https://github.com/Alvaro07)
 */

const TextField = props => {
  return <input type={props.type} />;
};

TextField.propTypes = {
  /** The type of the input */
  type: PropTypes.oneOf(["text", "email", "password"])
};

export default TextField;
