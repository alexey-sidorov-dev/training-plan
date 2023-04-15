import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Main from "./components/Main";
import Fallback from "./components/MainFallback";
import logReactError from "./helpers/logReactError";

const App: FC = () => (
  <ErrorBoundary FallbackComponent={Fallback} onError={logReactError}>
    <Main></Main>
  </ErrorBoundary>
);

export default App;
