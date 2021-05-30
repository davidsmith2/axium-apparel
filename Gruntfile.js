module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      options: {
        port: 4200,
        hostname: 'localhost',
        base: 'app'
      },
      test: {
      }
    },
    copy: {
      deployImages: {
        cwd: 'app/images',
        src: '**',
        dest: 'docs/images/',
        expand: true
      },
      deployScripts: {
        cwd: '.tmp/scripts',
        src: '*.js',
        dest: 'docs/scripts/',
        expand: true
      },
      deployStyles: {
        cwd: 'app/styles',
        src: '**/*.css',
        dest: 'docs/styles/',
        expand: true
      },
      deployFonts: {
        cwd: 'app/styles/fonts',
        src: '**',
        dest: 'docs/styles/fonts/',
        expand: true
      },
      deployHtml: {
        cwd: 'app',
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
      },
      jasmine: {
        files: [
          'test/*.test.js'
        ],
        tasks: [
          'jasmine'
        ]
      }
    },
    clean: {
      dist: ['.tmp', 'docs']
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'app/scripts/**/*.js',
        '!app/scripts/templates.js',
        '!app/scripts/lib/**/*.js'
      ]
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "app/scripts",
          mainConfigFile: "app/scripts/require.config.js",
          include: "require.config",
          name: "lib/almond/almond",
          out: ".tmp/scripts/main.js"
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
          'app/scripts/templates.js': ['app/templates/**/*.hbs']
        }
      }
    },
    jasmine: {
      all:{
        src : [],
        options: {
          specs: [
            'test/*.test.js'
          ],
          vendor: [
            'app/scripts/lib/requirejs/require.js'
          ],
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: ['app/scripts/require.config.js', 'test/require.config.js']
          }
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
          'requirejs': '<script data-main="scripts/require.config" src="${file}"></script>'
        },
        removeFiles : true
      },
      prod: {
        src: 'docs/index.html',
        blocks: {
          'config': { src: 'scripts/main.js', cwd: 'docs' }
        }
      },
      develop: {
        src: 'app/index.html',
        blocks: {
          'config': { src: 'scripts/lib/requirejs/require.js', cwd: 'app' }
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
    'cssmin'
  ]);

  grunt.registerTask('deploy', [
    'copy:deployImages',
    'copy:deployScripts',
    'copy:deployStyles',
    'copy:deployFonts',
    'copy:deployHtml'
  ]);

  grunt.registerTask('develop', ['build', 'fileblocks:develop', 'connect', 'watch']);

  grunt.registerTask('release', ['clean:dist', 'build', 'deploy', 'fileblocks:prod']);

  grunt.registerTask('test', ['jasmine']);

};