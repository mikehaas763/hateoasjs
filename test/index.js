var expect = require('expect.js'),
    hateoasjs = require('..');

describe('hateoasjs', function() {
  it('should say hello', function(done) {
    expect(hateoasjs()).to.equal('Hello, world');
    done();
  });
});
