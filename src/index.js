import Vue from 'vue'
const App = import(/* webpackChunkName: "group-foo" */ './App.vue')

new Vue({
  render: h => h(App)
}).$mount('#app')