import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import moment from "moment";
import { customRender } from "setupTests";
import Home from ".";

describe("Home Screen", () => {
  test("Renders the whole page", () => {
    render(customRender(<Home />));

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Home:body")).toBeInTheDocument();
  });

  test("Displays time correctly", () => {
    const CURRENT_TIME = moment().format("MMMM Do YYYY, h:mm:ss a");
    render(customRender(<Home />));

    expect(screen.getByText(CURRENT_TIME)).toBeInTheDocument();
  });
});
