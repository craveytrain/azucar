'use strict';

define(function() {
	return {
		on: function(El) {
			El.on = El.addEventListener;
		},

		trigger: function(El) {
			El.trigger = function trigger(type, data) {
				var event = document.createEvent('HTMLEvents');
				event.initEvent(type, true, true);
				event.data = data || {};
				event.eventName = type;
				this.dispatchEvent(event);
			};
		}
	};
});