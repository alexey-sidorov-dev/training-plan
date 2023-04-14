import "minireset.css";
import "../assets/styles/style.scss";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootNode = document.getElementById("root");
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<App></App>);
}
