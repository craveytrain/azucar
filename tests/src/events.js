'use strict';

define([
	'intern!bdd',
	'intern/chai!assert',
	'../../src/events.js'
], function(
	bdd,
	assert,
	events
) {
bdd.describe('Events', function() {
	var el

	bdd.beforeEach(function() {
		el = {}
	})

	bdd.describe('#on()', function() {
		bdd.before(function() {
			el.addEventListener = function() {} // Mock addEventListener
			events.on(el) // hook it up
		})

		bdd.it('should exist', function() {
			assert.property(el, 'on')
			assert.isFunction(el.on)
		})

		bdd.it('should equal event listener', function() {
			assert.strictEqual(el.on, el.addEventListener)
		})
	})

	bdd.describe('#trigger()', function() {
		bdd.before(function() {
			events.trigger(el) // hook it up
		})

		bdd.it('should exist', function() {
			assert.property(el, 'trigger')
			assert.isFunction(el.trigger)
		})
	})
})
})