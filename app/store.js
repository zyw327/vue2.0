import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
    //这里state必须是json,是一个对象
    state: {
        count: 0, //这里是初始值的罗列
        students: [
            {name: 'panda', age: 12, sex: '男' },
            {name: 'lisa', age: 12, sex: '女' },
            {name: 'lily', age: 12, sex: '女' },
            {name: 'kitty', age: 12, sex: '女' },
            {name: 'smith', age: 12, sex: '男' },
            {name: 'smart', age: 12, sex: '男' },
            {name: 'lazy', age: 12, sex: '男' },
            {name: 'xiaoxiao', age: 12, sex: '女' },
            {name: 'dada', age: 12, sex: '男' },
            {name: 'amy', age: 12, sex: '男' },
            {name: 'lilei', age: 12, sex: '男' },
            {name: 'xiaohong', age: 12, sex: '女' }
        ]
    },
    mutations: {
        // 没有所谓的大写字母的type了，就是一个一个函数
        add (state, payload) {
            console.log(payload);
            state.count ++;
            state.count += payload;
        },
        minus(state) {
            state.count --;
        }
    },
    actions:{
        add(content, payload) {
            content.commit('add', payload);
        }
    },
    getters: {
        man: (state) => {
            return state.students.filter((item) => {
                return item.sex == '男';
            });
        }
    }
});

export default store;