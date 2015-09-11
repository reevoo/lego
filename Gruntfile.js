module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    shell: {

      bundle: {
        command: function(environment) {
          var minify = environment === 'production';

          var generator = function(environment, rootFileName) {
            var command = 'jspm bundle-sfx src/' + rootFileName +
              ' ' + rootFileName + '.js';

            if (minify) {
              command = command + ' --minify';
            }

            return command;
          };

          return [
            generator(environment, 'index'),
          ].join(' & '); // Parallelicious.
        },

        options: {
          async: false,
        },
      },
    },

    jscs: {
      src: [
        'src/**/*.js',
        'spec/**/*.js',
      ],
      options: {
        config: '.jscsrc',
        verbose: true,
        requireCurlyBraces: ['if'],
      },
    },

    karma: {
      test: {
        options: {
          configFile: 'spec/karma.conf.js',
        },
      },
    },

    sass: {
      options: {
        sourceMap: true,
      },
      dev: {
        files: {
          'lego.css': 'src/main.scss',
        },
      },
      prod: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false,
        },
        files: {
          'lego.css': 'src/main.scss',
        },
      },
    },

    watch: {
      js: {
        files: ['Gruntfile.js', 'src/**/*.js'],
        tasks: ['development:compile'],
      },
      spec: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: ['test'],
      },
      css: {
        files: ['src/styles/**/*.scss'],
        tasks: ['sass:dev'],
      },
    },

  });

  // Development tasks
  grunt.registerTask('test', [
    'karma',
    'jscs',
  ]);

  grunt.registerTask('development:compile', [
    'sass:dev',
    'shell:bundle:development',
  ]);

  grunt.registerTask('production:compile', [
    'sass:prod',
    'shell:bundle:production',
  ]);
};
