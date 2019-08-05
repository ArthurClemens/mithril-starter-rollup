import m from "mithril";
import CSS from "../styles";

const Page = {
  view: ({ attrs }) =>
    m(CSS.page, [
      m(CSS.pageTitle, attrs.title || "Page"),
      m(m.route.Link, {
        href: "/",
        selector: CSS.link,
      }, "Back")
    ])
};

export default Page;
