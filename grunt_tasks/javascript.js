'use strict';
const jsSource = "src/javascript/es6/main.js",
  jsDest = "public_html/assets/js/main.js",
  jsDestMin = "public_html/assets/js/main.min.js";

module.exports = (grunt, pkg, paths, connect) => {

  grunt.config.merge({
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },

      files: {
        src: jsSource,
        dest: jsDest
      }
    },

    eslint: {
      options: {
        configFile: 'config/eslint.json'
      },
      target: ["public_html/assets/js/main.js"]
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },

      files: {
        src: jsDest,
        dest: jsDestMin
      }

    }

  });
}
