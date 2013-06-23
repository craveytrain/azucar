'use strict';

define([
	'intern!bdd',
	'intern/chai!assert',
	'../../src/lists.js'
], function(
	bdd,
	assert,
	lists
) {
bdd.describe('Lists', function() {
	var list

	bdd.beforeEach(function() {
		list = {}
	})

	for (var method in lists) {
		if (lists.hasOwnProperty(method)) {
			bdd.describe('#' + method + '()', function() {
				bdd.before(function() {
					lists[method](list) // hook it up
				})

				bdd.it('should exist', function() {
					assert.property(list, method)
					assert.isFunction(list[method])
				})
			})
		}
	}
})
})