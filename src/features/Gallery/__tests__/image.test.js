import React from "react";
import GalleryImage from "../Image";
import { shallow } from "enzyme";

describe("Test the GalleryImage Component", () => {
  it("should passes the margin right", () => {
    expect(shallow(<GalleryImage marginRight={12} />).find("div.card").length).toBe(1);
  });
});
