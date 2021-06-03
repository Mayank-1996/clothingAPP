import React from "react";
import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherButtonProps
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
}
