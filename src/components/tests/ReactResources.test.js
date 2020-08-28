import React from "react";
import { shallow, mount, render } from "../../enzyme";
import ReactResources from "../ReactResources";

describe("", () => {
  it("Renders some URLs", () => {
    const links = [
      {
        name: "Enzyme Github",
        URL: "https://github.com/enzymejs/enzyme"
      },
      {
        name: "Enzyme Cheatsheet",
        URL: "https://devhints.io/enzyme"
      }
  ];

    const wrapper = shallow(<ReactResources urlLinks={links} />);

    expect(wrapper.find(".reactResources").exists()).toBe(true);
  })});