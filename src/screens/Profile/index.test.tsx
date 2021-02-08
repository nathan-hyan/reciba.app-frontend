/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { render } from "@testing-library/react";
import Profile from ".";

describe("Profile screen", () => {
  test("Renders ok", () => {
    render(<Profile />);
  });
});
