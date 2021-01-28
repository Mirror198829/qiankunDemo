<template>
  <div>
    <button @click="addNum()">{{num}}</button>
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