<template>
  <el-menu
      :default-active= "currentPath"
      active-text-color="red"
      background-color="white"
      router
      style="min-width: 200px;height: 100%;position: fixed;top: 100px;left: 0"
      text-color="#222"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>

  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/stuDocManage', navItem: '学生档案管理'},
        {name: '/userdataManage', navItem: '用户管理'}
      ]
    }
  },
  computed: {
    currentPath () {
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}
</style>

