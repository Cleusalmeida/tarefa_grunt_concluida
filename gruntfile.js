module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {   //ambiente padrão de excução
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {  //ambiente final, onde o site estará rodando
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.registerTask('less', function(){
        const done = this.async();
        setTimeout(function(){
            console.log('less');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['less','uglify']);
}