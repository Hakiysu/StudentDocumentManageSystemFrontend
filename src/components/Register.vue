<script setup>
import {inject, ref} from "vue";
import {ElMessage} from "element-plus";
import router from "../router/router.js";

let axios = inject('$axios')

const regForm = ref({
  username: undefined,
  password: undefined,
  passwordConfirm: undefined,
  emailAddress: undefined
})

function register() {
  //check password is equal to passwordConfirm
  if (regForm.value.password !== regForm.value.passwordConfirm) {
    alert("两次输入的密码不一致");
    return;
  }
  //use axios to send request
  axios
      .post("/user/register", {
        username: regForm.value.username,
        password: regForm.value.password,
        emailAddress: regForm.value.emailAddress
      })
      .then(response => {
        if (response.status === 201) {
          ElMessage({
            message: response.data.message,
            type: "success"
          });
          router.push("/login");
        }
      })
      .catch(failResponse => {
        if (failResponse.response.status === 400) {
          ElMessage.error("此用户名已存在，请更换用户名");
        } else {
          console.error(failResponse);
        }
      });

}
</script>

<template>
  <el-form class="login-container" model="regForm" label-width="100px" @change="$forceUpdate()">
    <el-form-item label="用户名">
      <el-input v-model="regForm.username" placeholder="请输入用户名" type="text"/>
    </el-form-item>
    <el-form-item label="电子邮箱">
      <el-input v-model="regForm.emailAddress" placeholder="请输入电子邮箱" type="text"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="regForm.password" placeholder="请输入密码" type="password"/>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="regForm.passwordConfirm" placeholder="请再次输入密码" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="register">提交</el-button>
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
  background: url("../assets/bg.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}

</style>