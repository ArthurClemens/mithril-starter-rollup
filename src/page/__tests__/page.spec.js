/* global describe, it, expect */
import m from "mithril";
import { tidy } from "mithril-jest";
import page from "../";

describe("Page component", () => {
  it("should have a title", () => {
    const cmp = m(page);
    const html = tidy(cmp);
    expect(html).toMatchSnapshot();
  });
  it("title should be Page", () => {
    const cmp = m(page);
    const html = tidy(cmp);
    expect(html).toContain("Page");
  });
});

