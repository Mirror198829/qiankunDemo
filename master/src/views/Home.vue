<template>
  <div class="home" id="micrHome">
    <el-menu
      :default-active="actived"
      mode="horizontal"
      class="el-menu-vertical-demo"
      :router="true">
      <el-menu-item index="/summary">
        <i class="el-icon-menu"></i>
        <span slot="title">主应用-home页面</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <i class="el-icon-menu"></i>
        <span slot="title">主应用-about页面</span>
      </el-menu-item>
      <el-menu-item index="/micr/home">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用-home页面</span>
      </el-menu-item>
      <el-menu-item index="/micr/about">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用-about页面</span>
      </el-menu-item>
      <el-button @click="logout">退出登陆</el-button>
    </el-menu>
    <div v-if="$route.path.indexOf('/micr/') > -1" ref="subContainer" id="subContainer"></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      subApp: null,
      actived: '/summary'
    }
  },
  watch: {
    '$route.path': function (nv, ov) {
      const _t = this
      _t.actived = nv
    }
  },
  components: {

  },
  methods: {
    logout(){
      this.$router.push('/login')
      this.$act.setGlobalState({})
    }
  },
  async mounted() {
    this.actived = this.$route.path
  },
  async beforeDestroy() {
    this.subApp && this.subApp.unmount()
  },
  async update() {
    this.subApp && this.subApp.update({name: 'vueApp'})
  }
}
</script>
