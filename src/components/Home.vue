<template>

  <div class="common-layout">
    <el-container>
      <el-header>高校学生档案管理系统</el-header>
      <el-container>
        <el-aside >
          <nav-menu class="nav-menu"></nav-menu>
        </el-aside>
        <el-main >
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script>
import NavMenu from "./common/NavMenu.vue";

export default {
  name: 'Home',
  components: {NavMenu}
}



</script>

<style scoped>
.nav-menu {
  /*margin-bottom: 40px;*/
  background-color: rgba(48, 255, 145, 0.22);
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, .05);
  font-size: 30px;
  font-weight: bold
}

.el-header {
  background-color: rgba(48, 255, 145, 0.22);
  box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, .05);
  color: #333;
  line-height: 60px;
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  font-size: 45px;
  font-weight: bold
}

.common-layout {
  height: 100%;
  &>.el-container {
    height: 100%;
    &>.el-aside {
      height: 100%;
      background: #545c64;
    }
    &>.el-container {
      &>.el-header {
        padding: 0;
      }
    }
  }
}
</style>

