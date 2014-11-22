module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        es6transpiler: {
            options: {
                disallowUnknownReferences: false
            },
            es6: {
                expand: true,
                cwd: "src",
                src: ["**/*.js"],
                dest: "_build"
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
                tasks: ["es6transpiler", "karma"],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-es6-transpiler');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
