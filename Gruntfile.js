module.exports = function(grunt) {
	grunt.initConfig({

		bower: {
			install: {
				options: {
					targetDir: 'public/vendor',
					layout: 'byComponent',
					install: true,
					copy: true,
					verbose: true,
					cleanTargetDir: true,
					cleanBowerDir: true
				}
			}
		},
		copy: {
			h5bpConfig: {
				files: [{
					expand: true,
					cwd: 'public/vendor/html5-boilerplate/',
					src: ['robots.txt', '.htaccess', 'crossdomain.xml'],
					dest: 'public/',
					filter: 'isFile'
				}]
			},
			h5bpJs: {
				files: [{
					expand: true,
					cwd: 'public/vendor/html5-boilerplate/js/',
					src: ['plugins.js'],
					dest: 'public/js/',
					filter: 'isFile'
				}]
			},
			h5bpCss: {
				files: [{
					expand: true,
					cwd: 'public/vendor/html5-boilerplate/css/',
					src: ['main.css'],
					dest: 'public/css/',
					filter: 'isFile'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['bower', 'copy']);

};