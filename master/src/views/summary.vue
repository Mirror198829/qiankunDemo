<template>
  <div>
    <ul>
      <router-link to="/about">主应用-About</router-link> |
      <router-link to="/subApp1/home">子1-Home</router-link> |
      <router-link to="/subApp1/about">子1-About</router-link> |
      <router-link to="/subApp2/home">子2-Home</router-link> |
      <router-link to="/subApp2/about">子2-About</router-link>
    </ul>
    <ul>
      <button @click="$router.push('/about')">主应用-About </button> |
      <button @click="$router.push('/subApp1/home')">子1-Home </button> |
      <button @click="$router.push('/subApp1/about')">子1-About </button> |
      <button @click="$router.push('/subApp2/home')">子2-Home </button> |
      <button @click="$router.push('/subApp2/about')">子2-About </button>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {

      }
    },
    components: {

    },
    methods: {
      to(path) {
        this.$router.push(path)
      }
    },
    mounted() {

    },
    created() {}
  }
</script>

<style>

</style>
<style scoped>

</style>