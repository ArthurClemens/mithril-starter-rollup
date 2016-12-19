/* global describe, it, expect */
import m from 'mithril';
import {render, matchSnapshot} from '../../../tools/testing';
import page from '../';

describe('Page component', () => {
    it('should have a title', (done) => {
        const cmp = m(page);
        matchSnapshot(cmp, done);
    });
    it('title should be Page', () => {
        const cmp = m(page);
        const html = render(cmp);
        expect(html.innerHTML).toContain('Page');
    });
});