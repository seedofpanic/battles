import {extractCookies} from './index';

describe('extractCookies', () => {
    it('must return undefined if headers.cookie is undefined', () => {
        const req = {
            headers: {
            }
        } as any;

        expect(extractCookies(req)).toBeUndefined();
    });

    it('must parse cookies properly', () => {
        const req = {
            headers: {
                cookie: 'key1=value1; key2=value2; key3=value3'
            }
        } as any;

        expect(extractCookies(req)).toEqual({
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
        });
    });
});