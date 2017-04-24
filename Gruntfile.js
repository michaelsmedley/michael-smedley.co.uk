module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ["app/assets/js/*/*.js","app/components/*/*.js"],
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
          cwd: "app/assets/scss/",
          src: ["*.scss"],
          dest: "www/assets/css/",
          ext: ".css"
        }]
      }
    },
    autoprefixer:{
      dist:{
        files:{
          "www/assets/css/styles.css":"www/assets/css/styles.css"
        }
      }
    },
    uglify: {
      angular: {
        files: {
          "www/assets/js/angular.min.js": [
          "node_modules/angular/angular.min.js",
          "node_modules/angular-animate/angular-animate.min.js",
          "node_modules/angular-route/angular-route.min.js",
          "node_modules/angular-lazy-image/dist/lazy-image.min.js",
          ]
        }
      },
      app: {
        files: {
          "www/assets/js/app.min.js": ["app/assets/js/app/*.js", "app/components/*/*.js", "app/shared/*/*.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["<%= jshint.files %>"],
        tasks: ["jshint"]
      },
      styles: {
        files: ["app/assets/scss/*.scss"],
        tasks: ["sass","autoprefixer"]
      },
      uglify: {
        files: ["app/assets/js/app/*.js"],
        tasks: ["uglify"]
      }

    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-autoprefixer");

  grunt.registerTask("default", ["jshint","sass","uglify"]);

};