'use strict';
import coreConfig from './core';

let config = {
   appEnv: 'dev'
};

export default Object.freeze(Object.assign({}, coreConfig, config));
