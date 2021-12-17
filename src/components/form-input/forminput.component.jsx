import React from "react";
import "./form-input.styles.scss";

export default function FormInput({ label, ...formComponents }) {
  return (
    <div className="group">
      {/* {console.log(formComponents.value.length)} */}
      <input className="form-input" {...formComponents} />
      <label
        className={`form-input-label ${
          formComponents.value.length ? `shrink` : ``
        }`}
      >
        {label}
      </label>
    </div>
  );
}
