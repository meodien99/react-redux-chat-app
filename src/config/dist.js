'use strict';

import baseConfig from './core';

let config = {
  appEnv: 'dist'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
