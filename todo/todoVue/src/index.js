import Vue from 'vue';
import App from './app.vue';

let root = document.createElement('div');
document.body.appendChild(root);

import './assets/style/test.css';
import './assets/style/test.styl';

new Vue({
  render: (h)=>h(App)
}).$mount(root);