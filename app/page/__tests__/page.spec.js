/* global describe, it */
import m from 'mithril';
import {matchSnapshot} from '../../../scripts/testing';
import page from '../';

describe('Page component', () => {
    it('should have a title', (done) => {
        const cmp = m(page);
        matchSnapshot(cmp, done);
    });
});