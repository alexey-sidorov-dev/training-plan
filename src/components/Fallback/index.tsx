import { ComponentType, FC } from "react";
import { FallbackProps } from "react-error-boundary";

const Fallback: ComponentType<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

export default Fallback;
