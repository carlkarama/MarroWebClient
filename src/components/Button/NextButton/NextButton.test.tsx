import React from "react";
import NextButton from "./NextButton";
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";

describe("Next Button Component", () => {
    it("renders button", async () => {
        
        render(<MemoryRouter><NextButton route={"/search"} onClick={undefined} disabled={true} />;</MemoryRouter>);
            
        const button = screen.getByRole("next-btn");
        expect(button).toBeVisible;
    })
});
