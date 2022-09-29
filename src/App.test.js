import Heros from "./components/Hero/Heros";
import { render } from "@testing-library/react";
import React from "react";


it("Heros Component", async () => {
  render(<Heros />);
});

it("render input without crashing",  () => {
  const input = document.createElement('input');
  render(<Heros />, input);
});

it("render button without crashing",  () => {
  const button = document.createElement('button');
  render(<Heros />, button);
});










