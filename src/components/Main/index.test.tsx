import { render, screen } from "@testing-library/react";
import Main from ".";

describe("Main", () => {
  it("shoul render component", () => {
    render(<Main></Main>);

    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
