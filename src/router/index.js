import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from '../component/child/index.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Index
        }
    ]
})