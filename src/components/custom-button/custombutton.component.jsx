import React from "react";
import "./custom-button.styles.scss";

export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherButtonProps
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
}
