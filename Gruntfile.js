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

		cafemocha: {
			test: {
				src: 'test/**/*.js'
			}
		},

		watch: {
			test: {
				files: ['test/**/*.js'],
				tasks: ['test']
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-cafe-mocha')
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('test', ['cafemocha'])
	grunt.registerTask('build', ['jshint', 'test'])

	// Default task(s).
	grunt.registerTask('default', ['build', 'watch'])

};