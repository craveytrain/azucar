'use strict';

define([
	'intern!bdd',
	'intern/chai!assert',
	'../../src/classes.js'
], function(
	bdd,
	assert,
	classes
) {

bdd.describe('Classes', function() {
	var el

	bdd.beforeEach(function() {
		el = {
			classList: {}
		}
	})

	bdd.describe('#addClass()', function() {
		bdd.before(function() {
			el.classList.add = function() {}
			classes.add(el) // hook it up
		})

		bdd.it('should exist', function() {
			assert.property(el, 'addClass')
			assert.isFunction(el.addClass)
		})
	})

	bdd.describe('#removeClass()', function() {
		bdd.before(function() {
			el.classList.remove = function() {}
			classes.remove(el) // hook it up
		})

		bdd.it('should exist', function() {
			assert.property(el, 'removeClass')
			assert.isFunction(el.removeClass)
		})
	})

	bdd.describe('#containsClass()', function() {
		bdd.before(function() {
			el.classList.contains = function() {}
			classes.contains(el) // hook it up
		})

		bdd.it('should exist', function() {
			assert.property(el, 'containsClass')
			assert.isFunction(el.containsClass)
		})
	})
})
})