<template>
  <div id="app">
    <span>你好啊</span>
	<h1>{{age}}岁</h1>
	<p>{{num}}年后{{ageAdd}}岁</p>
	<button @click="add">计算</button>
	<router-link :to="{ name: 'user', params: { id: 123 }}">Go to User</router-link>
	<router-view></router-view>
  </div>
</template>

<script>
	export default {
		data () {
			return {
				age: 18,
				num: 0,
				ageAdd: 18
			};
		},
		methods: {
			add() {
				this.num = this.num + 10;
				this.ageAdd = this.age + this.num;
			}
		}
	}
</script>