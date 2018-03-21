/* global describe, it, expect */
import m from "mithril";
import { tidy } from "mithril-jest";
import Page from "../";

describe("Page component", () => {
  it("default title should be 'Page'", () => {
    const cmp = m(Page);
    const html = tidy(cmp);
    expect(html).toContain("Page");
    expect(html).toMatchSnapshot();
  });
  it("should render a custom title", () => {
    const title = "Custom page title";
    const cmp = m(Page, { title });
    const html = tidy(cmp);
    expect(html).toContain(title);
    expect(html).toMatchSnapshot();
  });
});

