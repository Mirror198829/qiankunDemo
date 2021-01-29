<template>
  <div>
    <h1 style="background:pink;padding:20px;margin:0">sub App1</h1>
    <ul>
      <router-link to="/summary">主应用-Home</router-link> | 
      <router-link to="/about">主应用-About</router-link> | 
      <router-link to="/subApp1/home">子1-Home</router-link> | 
      <router-link to="/subApp1/about">子1-About</router-link> | 
      <router-link to="/subApp2/home">子2-Home</router-link> | 
      <router-link to="/subApp2/about">子2-About</router-link>
    </ul>
    <ul>
      <button @click="$router.push('/summary')">主应用-Home </button> |
      <button @click="$router.push('/about')">主应用-About </button> |
      <button @click="$router.push('/subApp1/home')">子1-Home </button> |
      <button @click="$router.push('/subApp1/about')">子1-About </button> |
      <button @click="$router.push('/subApp2/home')">子2-Home </button> |
      <button @click="$router.push('/subApp2/about')">子2-About </button>
    </ul>
    <button @click="to('/summary')">主应用 home</button>
    <h3>用户名：{{$store.state.userName}}</h3>
    <!-- <nl-title name="num"></nl-title> -->
    <button @click="changeGlobalState">改变globalState</button>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        num: 0,
        userName:''
      }
    },
    components: {
      //nlTitle: window.commonComponent.nlTitle
    },
    methods: {
      addNum() {
        this.num++
      },
      to(path) {
          this.$router.push(path)
      },
      changeGlobalState(){
        this.$act.setGlobalState({userName:`new USER`})
      }
    },
    mounted() {
      this.userName = this.$act.getGlobalState('userName')
    },
    created() {
    }
  }
</script>

<style>

</style>
<style scoped>

</style>