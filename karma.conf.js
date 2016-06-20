module.exports = (config) => {
   'use strict';
   config.set({
      autoWatch: true,
      singleRun: true,

      frameworks: ['jspm', 'jasmine'],
      files: [
			'node_modules/babel-polyfill/dist/polyfill.js'
		],

      jspm: {
         config: 'tests/config.js',
         packages: 'tests/jspm_packages',
         loadFiles: [
            'tests/*.spec.js'
         ],
         serveFiles: [
            'src/*.js'
         ],
         paths: {
            'src/*' : 'base/src/*',
            'tests/*': 'base/tests/*',
            'github:*': 'base/tests/jspm_packages/github/*',
            'npm:*': 'base/tests/jspm_packages/npm/*'
         },
      },

      proxies: {
         '/tests/': '/base/tests/',
         '/jspm_packages/': '/tests/jspm_packages/'
      },

      browsers: ['PhantomJS'],

      reporters: ['progress', 'coverage'],
      preprocessors: {
         'src/*.js': ['babel', 'sourcemap', 'coverage']
      },
      babelPreprocessor: {
         options: {
            sourceMap: 'inline'
         },
         sourceFileName: function(file){
            return file.originalPath;
         }
      },
      coverageReporter: {
         instrumenters: {isparta: require('isparta')},
         instrumenter: {
            'src/*.js': 'isparta'
         },
         reporters: [
            {
               type: 'text-summary',
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
