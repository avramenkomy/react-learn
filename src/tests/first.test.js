import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

import App from "../App";
import Table from "../components/Table/TableHead";
import TableRow from "../components/Table/TableRow";
import ButtonTest from "../components/TestsComponents/ButtonTest";

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("test render App", () => {
  act(() => {
    render(<App />, container);
  });
});
