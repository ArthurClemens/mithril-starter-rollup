import m from 'mithril';
import CSS from './styles';
import page from './page';

const links = [{
    path: '/page',
    module: page,
    name: 'Link to Page'
}];

const index = {
    view: () =>
        m(CSS.page, [
            m(CSS.pageTitle, 'Home'),
            m('ul', links.map(link => (
                m(CSS.listItem, m(CSS.link, {
                    href: link.path,
                    oncreate: m.route.link
                }, link.name))
            )))
        ])
};

m.route.prefix('#');
const mountNode = document.querySelector('#app');
const routes = {
    '/': index
};
links.forEach(link => routes[link.path] = link.module);
m.route(mountNode, '/', routes);