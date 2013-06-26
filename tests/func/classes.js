'use strict';

define([
	'intern!bdd',
	'intern/chai!assert',
	'src/classes',
	'require'
], function(
	bdd,
	assert,
	classes,
	require
) {

	bdd.describe('Classes', function() {
		bdd.describe('#addClass()', function() {
			return this.remote.get(require.toUrl('./fixture.html'))
					.elementByTagName('h1')
					.then(function(){
						assert.ok(true);
					})
		})
	})

})