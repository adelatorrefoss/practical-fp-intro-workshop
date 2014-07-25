module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        traceur: {
            options: {},
            custom: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: ["**/*.js"],
                    dest: "_build"
                }]
            }

        },

        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        },

        watch: {
            scripts: {
                files: ["src/**/*.js"],
                tasks: ["traceur", "karma"],
                options: {
                    spawn: false
                }

            }

        }
    });

    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch', 'traceur', 'karma']);
};
