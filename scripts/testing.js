/* global expect */
import m from 'mithril';
import htmltidy from 'htmltidy';

export const matchSnapshot = (component, done) => {
    const root = document.createElement('div');
    m.render(root, component);
    htmltidy.tidy(root.innerHTML, {
        // Options: http://tidy.sourceforge.net/docs/quickref.html
        'show-body-only': true,
        'indent': true
    }, (err, html) => (
        !err && expect(html).toMatchSnapshot(),
        done()
    ));
};