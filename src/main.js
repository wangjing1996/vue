import Vue from 'vue'
import App from './component/app.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import router from './router/index.js'
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    },
    router
})