<template>
    <div>
        <h1>登录页</h1>
        <button @click="goToHome">登陆</button>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  components: {

  },
  methods:{
      goToHome(){
          let timeTemp = (new Date()).getTime()
          let obj = {
              token:`${timeTemp}`,
              userName:'zhadmin'
         }
          this.$act.setGlobalState(obj)
          for(let key in obj){
              sessionStorage.setItem(key,obj[key])     
          }
          this.$router.push('summary')
      }
  },
  mounted(){

  },
  created(){}
}
</script>

<style>

</style>
<style scoped>

</style>