import { FC } from "react";
import Main from "./components/Main";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";

const logError = (error: Error, info: { componentStack: string }) => {
  console.log(error.message, info.componentStack);
};

const App: FC = () => (
  <ErrorBoundary FallbackComponent={Fallback} onError={logError}>
    <Main></Main>
  </ErrorBoundary>
);

export default App;
