import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { describe, beforeEach, expect, it } from "vitest";

import CanvasMac from "../src/components/CanvasMac/CanvasMac";

const renderScreen = () => {
  const routes = [
    {
      path: "/",
      element: <CanvasMac />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  render(<RouterProvider router={router} />);
};

describe("Canvas component tests", () => {
  it("should render element on screen", () => {
    renderScreen();

    const canvas = screen.getByRole("canvasMac");
    expect(canvas).toBeInTheDocument();
  });

  it("should");
});
