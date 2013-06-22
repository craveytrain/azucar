'use strict';

define(function() {
	return {
		add: function(El) {
			El.addClass = El.classList.add;
		},

		remove: function(El) {
			El.removeClass = El.classList.remove;
		},

		contains: function(El) {
			El.containsClass = El.classList.contains;
		}
	};
});