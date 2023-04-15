import { ComponentType } from "react";
import { FallbackProps } from "react-error-boundary";
import "./styles.scss";

const MainFallback: ComponentType<FallbackProps> = ({ error }) => (
  <main className="main-fallback" data-testid="main-fallback">
    <h1 className="main-fallback__title">Ошибка в приложении</h1>
    <pre className="main-fallback__message">{error.message}</pre>
  </main>
);

export default MainFallback;
