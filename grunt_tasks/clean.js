module.exports = function (grunt, pkg, paths, connect) {
    grunt.config.merge({
        // https://www.npmjs.com/package/grunt-contrib-clean
        clean: {
            dist: ['./public_html/assets/styles.css', 'public_html/assets/js/main.js']
        },
    });
}
