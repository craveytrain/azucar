/*jshint maxstatements:99 */
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
			src: 'src/**/*.js',
			test: 'tests/**/*.js'
		},

		watch: {
			options: {
				livereload: true
			},
			test: {
				files: ['test/**/*.js'],
				tasks: ['jshint:test']
			},
			src: {
				files: ['src/**/*.js'],
				tasks: ['jshint:src']
			}
		},

		intern: {
			runner: {
				options: {
					runType: 'runner',
					config: 'tests/intern'
				}
			}
		},

		connect: {
			server: {}
		},

		open: {
			intern: {
				path: 'http://localhost:8000/node_modules/intern/client.html?config=tests/intern&reporters=webdriver'
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-connect')
	grunt.loadNpmTasks('grunt-open')
	grunt.loadNpmTasks('grunt-notify')
	grunt.loadNpmTasks('intern')

	grunt.registerTask('test', ['intern'])
	grunt.registerTask('qc', ['jshint'])
	grunt.registerTask('preview', ['qc', 'connect', 'open', 'watch'])

	// Default task(s).
	// grunt.registerTask('default', ['build', 'watch'])

};