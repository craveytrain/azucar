'use strict';
/*jshint unused: false */
var $ = (function (doc, _ElemProto, domNode) {
	var $ = doc.querySelectorAll.bind(doc);

	// Setup single node sugar
	_ElemProto.on = _ElemProto.addEventListener;

	_ElemProto.trigger = function (type, data) {
		var event = doc.createEvent('HTMLEvents');
		event.initEvent(type, true, true);
		event.data = data || {};
		event.eventName = type;
		this.dispatchEvent(event);
	};

	function createArray(collection, length) {
		var array = [];

		for (var i = 0; i < length; i++) {
			array[i] = collection[i];
		}

		return addSugar(array);
	}

	function addSugar(array) {
		if (typeof _ElemProto.on === 'function') {
			array.on = function(event, callback) {
				this.forEach(function(item) {
					item.on(event, callback);
				});
			};
		}

		if (typeof _ElemProto.trigger === 'function') {
			array.trigger = function(event, callback) {
				this.forEach(function(item) {
					item.trigger(event, callback);
				});
			};
		}

		if (typeof domNode.classList === 'object') {
			array.classList = {
				add: function addClass(className) {
					array.forEach(function(item) {
						item.classList.add(className);
					}, array);
				},
				remove: function removeClass(className) {
					array.forEach(function(item) {
						item.classList.remove(className);
					}, array);
				},
				contains: function containsClass(className) {
					return array.some(function(item) {
						return item.classList.contains(className);
					}, array);
				}
			};
		}

		return array;
	}

	return function init(s) {
		var collection = $(s);
		var length = collection.length;

		if (length === 1) {
			return collection[0];
		} else {
			return createArray(collection, length);
		}
	};
}(document, Element.prototype, document.createElement('p')));