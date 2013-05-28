module.exports = function(grunt) {
	'use strict';

	var pkg = grunt.file.readJSON('package.json')

	// Project configuration.
	grunt.initConfig({
		pkg: pkg,

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},

			build: 'Gruntfile.js',
			test: 'test/**/*.js'
		},

		mocha_phantomjs: {
			all: ['test/**/*.html']
		},

		watch: {
			test: {
				files: ['test/**/*.js'],
				tasks: ['test']
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-mocha-phantomjs')
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('test', ['mocha_phantomjs'])
	grunt.registerTask('build', ['jshint', 'test'])

	// Default task(s).
	grunt.registerTask('default', ['build', 'watch'])

};