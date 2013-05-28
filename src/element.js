'use strict';

// Events
Element.prototype.on = Element.prototype.addEventListener;

// Element.prototype.trigger = function (type, data) {
// 	var event = document.createEvent('HTMLEvents');
// 	event.initEvent(type, true, true);
// 	event.data = data || {};
// 	event.eventName = type;
// 	this.dispatchEvent(event);
// };

// // ClassList
// ['add', 'remove', 'toggle'].forEach(function(_method) {
// 	Element.prototype[_method + 'Class'] = ;
// });