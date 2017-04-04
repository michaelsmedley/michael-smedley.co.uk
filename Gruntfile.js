module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['app/assets/js/*/*.js'],
      options: {
        globals: {
          jQuery: true,
          esversion: 6
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: [{
          expand: true,
          cwd: 'app/assets/scss/',
          src: ['*.scss'],
          dest: 'www/assets/css/',
          ext: '.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'www/assets/js/app.min.js': ['app/assets/js/app/*.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      styles: {
        files: ['app/assets/scss/*.scss'],
        tasks: ['sass']
      },
      uglify: {
        files: ['app/assets/js/app/*.js'],
        tasks: ['uglify']
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint','sass','uglify']);

};