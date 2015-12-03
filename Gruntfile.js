module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

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

    sass: {
      options: {
        sourceMap: true,
      },
      regular: {
        files: {
          'lego.css': 'src/main.scss',
        },
      },
      minified: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false,
        },
        files: {
          'lego.min.css': 'src/main.scss',
        },
      },
    },

  });
};
