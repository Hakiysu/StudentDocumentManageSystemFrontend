<script setup>
import {inject, ref} from "vue";
import router from "../router/router.js";
import {ElMessage} from "element-plus";

let axios = inject('$axios')

const loginForm = ref({
  username: undefined,
  password: undefined
})


function login() {
  axios
      .post("/user/login", {
        username: loginForm.value.username,
        password: loginForm.value.password
      })
      .then(response => {
        if (response.status === 200) {
          sessionStorage.setItem("user", loginForm.value.username);
          ElMessage({
            message: response.data.message,
            type: "success"
          });
          router.push("/index");
        }
      })
      .catch(failResponse => {
        if (failResponse.response.status === 401) {
          ElMessage.error("用户名或密码错误！");
        } else {
          console.error(failResponse);
        }
      });
}

function registerNewUser() {
  //just jump to register page
  router.push("/register");
}
</script>


<template>
  <el-form class="login-container" label-width="100px" model="loginForm" @change="$forceUpdate()">
    <el-form-item label="用户名">
      <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="registerNewUser">注册新用户</el-button>

    </el-form-item>
  </el-form>

</template>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

#poster {
  background: url("../assets/bg.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}

</style>
