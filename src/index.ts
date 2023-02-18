import { App } from "./app/App";
import "modern-css-reset";
import "./styles/style.scss";

(async () => {
  const root = document.getElementById("root") as HTMLElement;
  /* eslint-disable-next-line no-new */
  new App(root);
})();
