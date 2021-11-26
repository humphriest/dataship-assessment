import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const app = () => {
  const renderedApp = render(<App />);
  const input = renderedApp.getByLabelText("input");
  return {
    input,
    ...renderedApp,
  };
};
describe("App Test", () => {
  beforeEach(() => {
    const { input } = app();
    const testString = "Test input";
    fireEvent.change(input, { target: { value: testString } });

    fireEvent.click(screen.getByText("Add to list"));
  });

  test("Add to list", () => {
    const testString = "Test input";

    expect(screen.getByRole("definition")).toHaveTextContent(testString);
    expect(screen.getByRole("checkbox").value).toBe("false");
  });

  test("Remove from the list", () => {
    const testString = "Test input";

    expect(screen.getByRole("definition")).toHaveTextContent(testString);
    expect(screen.getByRole("checkbox").value).toBe("false");

    fireEvent.click(screen.getByLabelText("delete"));
    expect(screen.getByRole("list").children).toHaveLength(0);
  });

  test("Toggle Checkbox", () => {
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox").value).toBe("true");

    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox").value).toBe("false");
  });
});
