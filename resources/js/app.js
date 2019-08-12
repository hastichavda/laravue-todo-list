require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('task-list', require('./components/TaskList.vue').default);

new Vue({
    el: '#app',
});
