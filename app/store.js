import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
    //这里state必须是json,是一个对象
    state: {
        count: 0 //这里是初始值的罗列
    },
    mutations: {
        // 没有所谓的大写字母的type了，就是一个一个函数
        add (state) {
            state.count ++;
        },
        minus(state) {
            state.count --;
        }
    }
});

export default store;