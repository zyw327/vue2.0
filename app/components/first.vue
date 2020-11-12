<template>
  <div>
      <h1>我是组件</h1>
      <ul>
          <li v-for="(item, index) in arr">{{item}}--{{index}}</li>
          <li v-for="(v, k) in obj">{{v}}--{{k}}</li>
      </ul>
      <div>
          <span>{{childrens}}</span>
      </div>
      <div v-yangse:hong.color="blue">ccc{{children}}</div>
      <div ref="box">你好啊</div>
      <button v-on:click="changeBox">changeBox</button>
      <input @input="change($event)">
      <button v-on:click="changea">@wo</button>
      <div>
          {{count}}
          <p>
              <button @click="addHander">+</button>
              <button @click="minusHander">-</button>
          </p>
          {{man}}
      </div>
  </div>
</template>
<script>

export default {
    props: ['childrens'],
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
		// if (!this.childrens) {
		// 	this.childrens = {
		// 		age: 1,
		// 		name: ""
		// 	};
		// }
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    beforeMount() {
        console.log('beforeMounte');
    },
	beforeUpdate() {
		console.log("生命周期beforeUpdate")
	},
    data() {
        return {
            arr: ['黑板', '白板', '粉笔', '水笔'],
            obj: {
                name: '小小',
                age: '18',
                sex: '保密',
                nation: '汉族'
            }
        }
    },
    methods: {
        change: function(e) {
            this.childrens.age = 1000;
            this.childrens.name = e.target.value;
        },
        changea: function() {
            this.childrens.age = 1000;
            this.$emit('changea', 100);
        },
        changeBox() {
            // console.log(this.$refs.box.style);
            this.$refs.box.style.background = 'red';
        },
        blue(args) {
            console.log(args);
            console.log(2222);
            return 'blue';
        },
        addHander() {
            this.$store.dispatch('add', 100);
            // this.$store.commit('add');
        },
        minusHander() {
            this.$store.commit('minus');
        }
    },
    computed: {  
        children: function () {  
            return this.childrens.age + 10;  
        },  
        name: function () {
            return this.childrens.name + "haha";  
        },
        count() {
            return this.$store.state.count;
        },
        man() {
            return this.$store.getters.man;
        }  
    },
    directives: {
        yangse(el, bingding) {
            el.style.background = bingding.value();
            if (bingding.modifiers.color) {
                // el.style.background = 'yellow';
            }
            console.log(bingding);
        }
    }
}
</script>

<style>

</style>
