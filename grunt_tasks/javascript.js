module.exports = function (grunt, pkg, paths, connect) {

    var jsSource = "src/javascript/es6/main.js",
        jsDest = "public_html/assets/js/main.js",
        jsDestMin = "public_html/assets/js/main.min.js";

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
                configFile: 'config/eslint.json',
                //rulePaths: ['conf/rules']
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
