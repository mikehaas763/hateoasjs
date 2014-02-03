/*
 * This file is part of the hateoasjs package.
 *
 * (c) Mike Haas <mike@emken.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

var Resource = function (relation, href) {
  this.relation = relation;
  this.href = href;
};

module.exports.Resource = Resource;