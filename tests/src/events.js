define([
	'intern!bdd',
	'intern/chai!assert',
	'../../src/events.js'
], function(
	bdd,
	assert,
	events
) {
	with(bdd) {
		describe('Events', function() {
			var el

			beforeEach(function() {
				el = {}
			})

			describe('#on()', function() {
				before(function() {
					el.addEventListener = function() {} // Mock addEventListener
					events.on(el) // hook it up
				})

				it('should exist', function() {
					assert.property(el, 'on')
					assert.isFunction(el.on)
				})

				it('should equal event listener', function() {
					assert.strictEqual(el.on, el.addEventListener)
				})
			})

			describe('#trigger()', function() {
				before(function() {
					events.trigger(el) // hook it up
				})

				it('should exist', function() {
					assert.property(el, 'trigger')
					assert.isFunction(el.trigger)
				})
			})
		})
	}
})