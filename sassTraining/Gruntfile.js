module.exports = function (grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          dist: {
            files: [{
                expand: true,
                cwd: '', // Src matches are relative to this path
                src: ['sass/*.scss'], //Actual pattern to match
                dest: 'css/', //Destination filepath prefix
                ext: '.css' //new files extension
            }]
          }
      },
      watch: {
        gruntfile:{
            files:'Gruntfile.js',
            tasks:['gwatch']
          },
        css: {
            cwd:'',
            files: ['sass/*.scss'],
            tasks: ['sass'],
            options: {
                livereload:true
            }
        }
      }
   });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('gwatch',['watch']);
    grunt.registerTask('default',['sass','watch']);
};