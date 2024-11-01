import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

Button.propTypes = {
  type: propTypes.oneOf(["button", "Link"]),
  target: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  isBlock: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};

function Button(props) {
  //logic untuk className aktivitas button dari bootstrap-nya
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLight) className.push("btn-light");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  //function untuk button onClick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  //button-nya kalau disable atau loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  //button-nya akan mengarah ke link external atau internal
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join("")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  //mengembalikan button
  return (
    <button
      className={className.join("")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
