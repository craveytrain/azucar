'use strict';

describe('Element', function() {
	var el

	beforeEach(function() {
		el = document.createElement('p')
	})

	describe('#on()', function() {
		it('should exist', function() {
			expect(el).to.respondTo('on')
		})

		it('should point to addEventListener()', function() {
			expect(el.on).to.equal(el.addEventListener)
		})
	})

	describe('#trigger()', function() {
		it('should exist', function() {
			expect(el).to.respondTo('trigger')
		})
	})
})