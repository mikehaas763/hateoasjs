/*
 * This file is part of the hateoasjs package.
 *
 * (c) Mike Haas <mike@emken.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var Link = function (relation, href, attributes) {
  this.relation = relation;
  this.href = href;
  this.attributes = attributes;
};

module.exports.Link = Link;