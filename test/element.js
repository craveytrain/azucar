'use strict';

describe('Element', function() {
	var el

	beforeEach(function() {
		el = document.createElement('p')
	})

	describe('events', function() {
		it('should have on()', function() {
			expect(el).to.respondTo('on')
		})
	})
})