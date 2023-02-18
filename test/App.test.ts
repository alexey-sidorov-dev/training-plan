import { App } from "../src/app/App";

describe("App", () => {
  let root: HTMLDivElement;

  beforeAll(() => {
    root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.append(root);
  });

  afterAll(() => {
    root?.remove();
  });
  it("should create App", () => {
    const app = new App(root);

    expect(app).toBeInstanceOf(App);
  });
});
