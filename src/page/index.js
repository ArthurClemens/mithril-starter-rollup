import m from "mithril";
import CSS from "../styles";

const Page = {
  view: ({ attrs }) =>
    m(CSS.page, [
      m(CSS.pageTitle, attrs.title || "Page"),
      m(CSS.link, {
        href: "/",
        oncreate: m.route.link
      }, "Back")
    ])
};

export default Page;
