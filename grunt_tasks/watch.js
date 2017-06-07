'use strict';
module.exports = (grunt, pkg, paths, connect) => {
  grunt.config.merge({
    watch: {
      sass: {
        files: ['./src/sass/**/*.scss'],
        tasks: ['sass_globbing', 'sass', 'postcss'],
        options: {
          livereload: {
            host: connect.localHost,
            port: connect.liveReloadPort
          }
        }
      },
      javascript: {
        files: ['./src/javascript/**/*.js'],
        tasks: ['processJavascript'],
        options: {
          livereload: {
            host: connect.localHost,
            port: connect.liveReloadPort
          }
        }
      }
    }
  });
}
