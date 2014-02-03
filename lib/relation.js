/*
 * This file is part of the hateoasjs package.
 *
 * (c) Mike Haas <mike@emken.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var Relation = function (name, href) {
  this.name = name;
  this.href = href;
};

module.exports.Relation = Relation;