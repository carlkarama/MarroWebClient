import React from "react";
import NextButton from "./NextButton";
import { render, screen } from "@testing-library/react";

test("renders button", () => {
    render(<NextButton route={undefined} onClick={undefined} disabled={undefined} />);
    const button = screen.getByText(/Next Button/i);
    expect(button).toBe("Next Button");
})