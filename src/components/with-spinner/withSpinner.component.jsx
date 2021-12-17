import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";
const WithspinnerComponent = (WrappedComponent) => {
  const spinner = ({ isLoading, otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return spinner;
};

export default WithspinnerComponent;
