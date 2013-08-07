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
		},

		connect: {
			server: {}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-connect')
	grunt.loadNpmTasks('intern')

	grunt.registerTask('test', ['intern:client'])
	grunt.registerTask('build', ['jshint', 'test'])
	grunt.registerTask('preview', ['connect', 'watch'])

	// Default task(s).
	grunt.registerTask('default', ['build', 'watch'])

};