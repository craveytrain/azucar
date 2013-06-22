define([
	'intern!bdd',
	'intern/chai!assert',
	'../../src/classes.js'
], function(
	bdd,
	assert,
	classes
) {
	with(bdd) {
		describe('Classes', function() {
			var el

			beforeEach(function() {
				el = {
					classList: {}
				}
			})

			describe('#addClass()', function() {
				before(function() {
					el.classList.add = function() {}
					classes.add(el) // hook it up
				})

				it('should exist', function() {
					assert.property(el, 'addClass')
					assert.isFunction(el.addClass)
				})
			})

			describe('#removeClass()', function() {
				before(function() {
					el.classList.remove = function() {}
					classes.remove(el) // hook it up
				})

				it('should exist', function() {
					assert.property(el, 'removeClass')
					assert.isFunction(el.removeClass)
				})
			})

			describe('#containsClass()', function() {
				before(function() {
					el.classList.contains = function() {}
					classes.contains(el) // hook it up
				})

				it('should exist', function() {
					assert.property(el, 'containsClass')
					assert.isFunction(el.containsClass)
				})
			})
		})
	}
})