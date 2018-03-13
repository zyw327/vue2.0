import Vue from "vue";
import First from './components/first.vue'

import store from './store'

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
        First
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
    }
});