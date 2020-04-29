import store from './store';

declare var global: any

global.browser = require('webextension-polyfill');

alert(`Hello ${store.getters.foo}!`);
