/* global it, expect */
import m from 'mithril';
import htmltidy from 'htmltidy';

/*
Usage:

import m from 'mithril';
import {render} from '../../../tools/testing';

describe('My component', () => {
    it('no params', (done) => {
        const cmp = m(myComponent);
        const html = render(cmp);
        // ...
    });
});
*/
export const render = (component) => {
    const root = document.createElement('div');
    m.render(root, component);
    return root;
};

/*
Usage:

import m from 'mithril';
import {matchSnapshot} from '../../../tools/testing';

describe('My component', () => {
    it('no params', (done) => {
        const cmp = m(myComponent);
        matchSnapshot(cmp, done);
    });
});
*/
export const matchSnapshot = (component, done) => {
    const html = render(component).innerHTML;
    htmltidy.tidy(html, {
        // Options: http://tidy.sourceforge.net/docs/quickref.html
        'show-body-only': true,
        'indent': true
    }, (err, tidyHtml) => (!err && expect(tidyHtml).toMatchSnapshot(),
        done()
    ));
};

/*
Usage:

import {runTests} from '../../../tools/testing';

const tests = {
    'no params': m(myComponent),
    'param content': m(myComponent, {
        content: m('div', 'CONTENT')
    })
};

describe('My component', () => {
    runTests(tests);
});
*/
export const runTests = tests =>
    Object.keys(tests).forEach(key =>
        it(key, (done) => matchSnapshot(tests[key], done))
    );