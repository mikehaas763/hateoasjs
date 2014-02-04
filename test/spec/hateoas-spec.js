/*
 * This file is part of the hateoasjs package.
 *
 * (c) Mike Haas <mike@emken.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var expect = require('expect.js');
var hateoasjs = require('../..');

describe('hateoasjs module', function() {
  it('should present itself as an object to act as a facade', function() {
    expect(hateoasjs).to.be.an('object');
  });

  it('should provide a constructor to create a Resource', function() {
    expect(hateoasjs.Resource).to.be.a('function');
  });
});
