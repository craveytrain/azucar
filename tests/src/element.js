'use strict';

define([
	'intern!bdd',
	'intern/chai!assert',
	'src/azucar'
], function(
	bdd,
	assert
) {
	bdd.describe('Element', function() {
		bdd.describe('Events', function() {
			bdd.describe('#on()', function() {
				bdd.it('exists', function() {
					assert.property(Element.prototype, 'on');
					assert.isFunction(Element.prototype.on);
				})

				bdd.it('equals event listener', function() {
					assert.strictEqual(Element.prototype.on, Element.prototype.addEventListener)
				})
			})

			bdd.describe('#trigger()', function() {
				bdd.it('exists', function() {
					assert.property(Element.prototype, 'trigger');
					assert.isFunction(Element.prototype.trigger);
				})
			})
		})
	})
})