'use strict';

const server = require('../server.js')

describe('returnALetter function', () => {
    it('makes a letter lowercase', () => {
      let letter = 'A';
      let actual = server.returnALetter(letter);
      expect(actual).toEqual('a');
    });
});

