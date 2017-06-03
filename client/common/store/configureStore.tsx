// let configureStore;
// if (process.env.NODE_ENV === 'production') {
//    configureStore = require('./configureStore.prod')
// } else {
//     configureStore = require('./configureStore.dev')
// }


import configureStore from './configureStore.prod';

export default configureStore;