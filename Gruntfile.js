module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      deployImages: {
        cwd: 'app/img',
        src: '**',
        dest: 'docs/app/img/',
        expand: true
      },
      deployScripts: {
        cwd: 'app',
        src: '*.prod.js',
        dest: 'docs/app/',
        expand: true
      },
      deployStyles: {
        cwd: 'app/styles',
        src: '**/*.css',
        dest: 'docs/app/styles/',
        expand: true
      },
      deployFonts: {
        cwd: 'app/styles/fonts',
        src: '**',
        dest: 'docs/app/styles/fonts/',
        expand: true
      },
      deployHtml: {
        cwd: '.',
        src: 'index.html',
        dest: 'docs/',
        expand: true
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      handlebars: {
        files: [
          'app/templates/**/*.hbs'
        ],
        tasks: ['handlebars']
      },
      css: {
        files: 'app/styles/**/*.less',
        tasks: ['less']
      },
      livereload: {
        files: [
          '*.html',
          'app/styles/{,*/}*.css',
          'app/scripts/{,*/}*.js',
        ]
      }
    },
    clean: {
      dist: ['docs'],
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'app/scripts/**/*.js',
        '!app/scripts/lib/**/*.js'
      ]
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "app",
          mainConfigFile: "app/main.js",
          include: "main",
          name: "scripts/lib/almond/almond",
          out: "app/main.prod.js"
        }
      }
    },
    less: {
      dist: {
        files: {
          'app/styles/main.css' : 'app/styles/main.less'
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'JST'
        },
        files: {
          'app/templates.prod.js': ['app/templates/**/*.hbs']
        }
      }
    },
    jasmine: {
      all:{
        src : 'app/scripts/{,*/}*.js',
        options: {
          keepRunner: true,
          specs : 'test/**/*.js',
          vendor : [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/lodash/dist/lodash.js',
            'bower_components/backbone/backbone.js',
            'bower_components/marionette/lib/core/backbone.marionette.js',
            'bower_components/backbone.babysitter/lib/backbone.babysitter.js',
            'bower_components/backbone.wreqr/lib/backbone.wreqr.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/almond/almond.js'
          ]
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'app/styles/main.css': [
            'docs/styles/{,*/}*.css',
            'app/styles/{,*/}*.css'
          ]
        }
      }
    },
    fileblocks: {
      options: {
        templates: {
          'js': '<script data-main="app/main" src="${file}"></script>',
        },
        removeFiles : true
      },
      prod: {
        src: 'docs/index.html',
        blocks: {
          'app': { src: 'app/main.prod.js' }
        }
      },
      develop: {
        src: 'index.html',
        blocks: {
          'app': { src: 'app/scripts/lib/requirejs/require.js' }
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-file-blocks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', [
    'jshint',
    'handlebars',
    'less',
    'requirejs',
    'cssmin',
    'jasmine'
  ]);

  grunt.registerTask('deploy', [
    'copy:deployImages',
    'copy:deployScripts',
    'copy:deployStyles',
    'copy:deployFonts',
    'copy:deployHtml'
  ]);

  grunt.registerTask('develop', ['build', 'fileblocks:develop', 'watch']);

  grunt.registerTask('release', ['clean:dist', 'build', 'deploy', 'fileblocks:prod']);

};