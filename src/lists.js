'use strict';

define(function() {
	var _arrayProto = Array.prototype;
	var _arrayMethods = [
		'pop',
		'push',
		'reverse',
		'shift',
		'unshift',
		'slice',
		'splice',
		'sort',
		'filter',
		'forEach',
		'some',
		'every',
		'map',
		'indexOf',
		'lastIndexOf',
		'reduce',
		'reduceRight'
	];
	var methods = {};

	function attacher(_method) {
		return function(List) {
			if (!List[_method]) {
				List[_method] = _arrayProto[_method];
			}
		}
	}

	_arrayMethods.forEach(function(_method) {
		if (typeof _arrayProto[_method] === 'function') {
			methods[_method] = attacher(_method);
		}
	});

	return methods;
});