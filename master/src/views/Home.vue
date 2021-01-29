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
      <el-menu-item index="/subApp1/home">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用1-home页面</span>
      </el-menu-item>
      <el-menu-item index="/subApp1/about">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用1-about页面</span>
      </el-menu-item>
      <el-menu-item index="/subApp2/home">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用2-home页面</span>
      </el-menu-item>
      <el-menu-item index="/subApp2/about">
        <i class="el-icon-menu"></i>
        <span slot="title">子应用2-about页面</span>
      </el-menu-item>
      登陆用户：{{$act.getGlobalState('userName')}}
      <el-button @click="logout">退出登陆</el-button>
    </el-menu>
    <div ref="subContainer" id="subContainer"></div>
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
      this.$act.setGlobalState({
        userName:null,
        token:null
      })
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
