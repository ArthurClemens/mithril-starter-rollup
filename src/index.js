import m from "mithril";
import CSS from "./styles";
import Page from "./page";

const links = [
  {
    path: "/page",
    module: Page,
    name: "Link to Page"
  }
];

const Index = {
  view: () =>
    m(CSS.page, [
      m(CSS.pageTitle, "Home"),
      m(CSS.list, links.map(link => (
        m(CSS.listItem, m(m.route.Link, {
          selector: CSS.link,
          href: link.path,
        }, link.name))
      )))
    ])
};

m.route.prefix = "#";
const mountNode = document.querySelector("#app");
const routes = {
  "/": Index
};
links.forEach(link => routes[link.path] = link.module);
m.route(mountNode, "/", routes);
