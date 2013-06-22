'use strict';

define([
	'events'
], function(events) {
	var El = Element.prototype;

	Object.keys(events).forEach(function(methodName) {
		events[methodName](El);
	});
});