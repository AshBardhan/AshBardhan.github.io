module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			'js': {
				src: ['assets/js/*.js'],
				dest: 'dist/js/custom.js'
			},
			'package-js': {
				src: ['bower_components/jquery/dist/jquery.min.js',  'bower_components/angular/angular.min.js', 'bower_components/angular-ui-router/release/angular-ui-router.min.js'],
				dest: 'dist/js/package.min.js'
			}
		},
		uglify: {
			'js': {
				src: ['dist/js/custom.js'],
				dest: 'dist/js/custom.min.js'
			}
		},
		clean: {
			'before': ['dist/**/*.js'],
			'after': ['dist/**/*.js', '!dist/**/*.min.js']
		},
		watch: {
			'js': {
				files: ['assets/js/*.js'],
				tasks: ['concat:js', 'uglify:js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['clean:before', 'concat', 'uglify', 'clean:after']);
};