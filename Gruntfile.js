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
			test: 'tests/**/*.js'
		},

		watch: {
			test: {
				files: ['test/**/*.js'],
				tasks: ['test']
			}
		},

		intern: {
			client: {
				options: {
					config: 'tests/intern'
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('intern')

	grunt.registerTask('test', ['intern:client'])
	grunt.registerTask('build', ['jshint', 'test'])

	// Default task(s).
	grunt.registerTask('default', ['build', 'watch'])

};