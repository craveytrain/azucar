var $ = function (d) {
	var $ = d.querySelectorAll.bind(d);

	// Setup single node sugar
	Element.prototype.on = Element.prototype.addEventListener;

	Element.prototype.trigger = function (type, data) {
		var event = document.createEvent('HTMLEvents');
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
		array.on = function(event, callback) {
			this.forEach(function(item, index) {
				item.on(event, callback);
			});
		};

		array.trigger = function(event, callback) {
			this.forEach(function(item, index) {
				item.trigger(event, callback);
			});
		};

		array.classList = {
			add: function addClass(className) {
				array.forEach(function(item, index) {
					item.classList.add(className);
				}, array);
			},
			remove: function removeClass(className) {
				array.forEach(function(item, index) {
					item.classList.remove(className);
				}, array);
			},
			contains: function containsClass(className) {
				return array.some(function(item, index) {
					return item.classList.contains(className);
				}, array);
			}
		};

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
}(document);