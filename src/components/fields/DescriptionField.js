import React from "react";
import PropTypes from "prop-types";

function DescriptionField(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <span />;
  }
  return (
    <span className="chip tooltip tooltip-right" data-tooltip={description}>
      <i className="icon icon-message"></i>
    </span>
  );
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  };
}

export default DescriptionField;
