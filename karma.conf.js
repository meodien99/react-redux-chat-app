var webpackCfg = require('./webpack.config');

// Set node environment to testing
process.env.NODE_ENV = 'test';

module.exports = (config) => {
   config.set({
      basePath: '',
      browsers: [ 'PhantomJS' ],
      files: [
         'test/loadtests.js'
      ],
      port: 3333,
      captureTimeout: 60000,
      frameworks: [ 'mocha', 'chai' ],
      client: {
         mocha: {}
      },
      singleRun: true,
      reporters: [ 'mocha', 'coverage' ],
      preprocessors: {
         'test/loadtests.js': [ 'webpack', 'sourcemap' ]
      },
      webpack: webpackCfg,
      webpackServer: {
         noInfo: true
      },
      coverageReporter: {
         dir: 'coverage/',
         reporters: [
            {
               type: 'text',
               subdir: normalizationBrowserName
            },
            {
               type: 'html',
               dir: 'coverage/',
               subdir: normalizationBrowserName
            }
         ]
      }
   });

   function normalizationBrowserName(browser) {
      return browser.toLowerCase().split(/[ /-]/)[0];
   }
};
