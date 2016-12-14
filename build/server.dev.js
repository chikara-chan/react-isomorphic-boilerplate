require('babel-core/register');
require('babel-polyfill');
require.extensions['.scss'] = () => false;
require('../server/index.js');
