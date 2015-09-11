module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jspm', 'jasmine'],

    jspm: {
      // These files are loaded when Karma is run.
      loadFiles: [
        'config.js',
        'spec/**/*.js',
      ],

      // These files are in the import path (for ES6 modules).
      serveFiles: [
        'src/**/*.js',
      ],
    },

    // When SystemJS looks for a file (e.g. '/app/main.js'), it uses the 'real' URL. However,
    // Karma puts all of your files at a /base root (the file above is at /base/app/main.js),
    // so we need to set up a proxy to access these files.
    proxies: {
      '/spec':          '/base/spec',       // Shorthand for specs
      '/jspm_packages': '/base/jspm_packages',
      '/config.js':     '/base/config.js',
      '/src':           '/base/src', // Shorthand for specs
    },

    // We need to transpile our tests to ES5 before running them.
    preprocessors: {
      'spec/**/*.js': ['babel'],
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        modules: 'system',
      },
    },

    reporters: ['dots'],
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
};
