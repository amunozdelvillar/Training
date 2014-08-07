module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect:{
            server:{
                options:{
                    port: 9001,
                    hostname: 'localhost',
                    keepalive:true,
                    livereload:true
                }
            }
        },
        watch:{
            src:{
                cwd:'',
                files:['*.html','css/*.css'],
                tasks:['connect','watch'],
                options:{
                    livereload:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);

};