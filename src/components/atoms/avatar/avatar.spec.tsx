import React from "react";
import { render } from "@testing-library/react";
import { Avatar } from ".";

describe("Avatar", () => {
  it("renders without crashing", () => {
    expect(() => render(<Avatar />)).toBeTruthy();
  });

  it("should render alt and title attributes", () => {
    const { container } = render(<Avatar alt="test alt" title="test title" />);
    const avatar = container.getElementsByTagName("img").item(0);
    expect(avatar).toHaveAttribute("alt", "test alt");
    expect(avatar).toHaveAttribute("title", "test title");
  });
});
