<script setup>
import {inject, ref} from "vue";
import router from "../../router/router.js";


let axios = inject('$axios')
const userdataEditForm = ref({
  username: undefined,
  password: undefined,
  emailAddress: undefined
})

const oldUserInfo = ref({
  username: undefined,
  password: undefined,
  emailAddress: undefined
})
//get student info from backend
axios
    .post("/user/getUserInfo", {
      //username which in session
      username: sessionStorage.getItem("user")
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        oldUserInfo.value = res.data;
      } else {
        alert("后台返回数据失败");
      }
    }).catch((err) => {
  console.log(err);
});

//upload userinfo edit to backend
function submit() {
  axios
      .post("/user/updateUserInfo", {
        username: userdataEditForm.value.username,
        emailAddress: userdataEditForm.value.emailAddress,
        password: userdataEditForm.value.password
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("用户信息已更新");
          //refresh page by vue-router
          router.go(0);
        } else {
          alert("后台返回数据失败");
        }
      }).catch((err) => {
    console.log(err);
  });
}
</script>

<template>
  <el-form class="login-container" label-width="100px" model="userdataEditForm" @change="$forceUpdate()">
    <el-form-item label="原用户名">
      {{ oldUserInfo.username }}
    </el-form-item>
    <el-form-item label="现用户名">
      <el-input v-model="userdataEditForm.username" placeholder="请输入用户名" type="text"/>
    </el-form-item>
    <el-form-item label="原电子邮箱">
      {{ oldUserInfo.emailAddress }}
    </el-form-item>
    <el-form-item label="现电子邮箱">
      <el-input v-model="userdataEditForm.emailAddress" placeholder="请输入电子邮箱" type="text"/>
    </el-form-item>
    <el-form-item label="原密码">
      {{ oldUserInfo.password }}
    </el-form-item>
    <el-form-item label="现密码">
      <el-input v-model="userdataEditForm.password" placeholder="请输入密码" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>


</template>

<style scoped>
</style>