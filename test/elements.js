'use strict';

describe('Elements', function() {
	var el, list

	beforeEach(function() {
		el = document.createElement('p')
		list = document.querySelectorAll('p')
	})

	describe('', function() {
		it ('should be a NodeList', function() {
			expect(list.__proto__).to.equal(NodeList.prototype)
		})
	})


})