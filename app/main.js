import Vue from "vue";
import First from './components/first.vue'
import Index from './components/index.vue'
import User from './components/user.vue'

import VueRouter from 'vue-router'

import store from './store'

const routes = [
    { path: '/foo', component: Index },
    { path: '/bar', component: First, props: {
			childrens : {
				name: "小强",  
				age: 20,  
				sex: "男"  
			}
		},
	},
	{path: '/user/:id', name: "user", component: User, props: true}
]
const router = new VueRouter({
	routes // (缩写) 相当于 routes: routes
})  

Vue.use(VueRouter);
new Vue({
    el: "#app",
    data: {
        msg: 100,
        a: 100,
        childrens : {  
            name: "小强",  
            age: 20,  
            sex: "男"  
        } 
    },
    store,
    components: {
        First,
        Index
    },
    methods: {
        change() {
            this.a++;
        },
        changea(num) {
            console.log(num);
            this.a += num;
        }
    },   
    directives: {
        hong(el) {
            el.style.background = 'red'
        }
    },
    router
});