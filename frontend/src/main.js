import { createApp } from 'vue/dist/vue.esm-bundler.js'
// import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp({
  template:`
    <header-app></header-app>
    auihauiha
    <footer-app></footer-app>
    `
})

app.component('header-app',{
  template:'<h2>Header</h2>'
})

app.component('footer-app',{
  template:'<h2>footer</h2>'
})

app.use(router)

app.mount('#app')
