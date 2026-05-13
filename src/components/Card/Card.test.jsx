import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "./Card";

describe("Quantity tests" , () => {
    it("increases item quantity", async () => {
        const user = userEvent.setup();

        render (<Card />);

        const button = screen.getByRole("button", 
            {name: "+"}
        );

        await user.click(button);

        expect(screen.getByRole("textbox", {name: "quantity"}).value).toBe("1");
    })

    it("decreases item quantity", async () => {
        const user = userEvent.setup();

        render (<Card />);

        const plusButton = screen.getByRole("button", 
            {name: "+"}
        );

        const minusButton = screen.getByRole("button", 
            {name: "-"}
        );

        await user.click(plusButton);
        expect(screen.getByRole("textbox", {name: "quantity"}).value).toBe("1");

        await user.click(minusButton);
        expect(screen.getByRole("textbox", {name: "quantity"}).value).toBe("0");
    })
})