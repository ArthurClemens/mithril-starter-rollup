import m from 'mithril';
import CSS from '../styles';

const page = {
    view: () =>
        m(CSS.page, [
            m(CSS.pageTitle, 'Page'),
            m(CSS.link, {
                href: '/',
                oncreate: m.route.link
            }, 'Back')
        ])
};

export default page;