import Vue from 'vue';
import App from './app.vue';

let root = document.createElement('div');
document.body.appendChild(root);


import './assets/style/simple.styl';
import './app.vue';
new Vue({
  render: (h)=>h(App)
}).$mount(root);