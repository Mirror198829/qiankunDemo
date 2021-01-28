<template>
    <div>
        概览页 |
        <button @click="to('/micr/home')">子应用Home</button> |
        <button @click="to('/micr/about')">子应用About</button>
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
    to(path) {
          this.$router.push(path)
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